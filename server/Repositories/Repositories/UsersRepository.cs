using Domain;
using Domain.Consts;
using Domain.Enums;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using Repositories.Interfaces;

namespace Repositories.Repositories;

public class UsersRepository : IUsersRepository
{
    private readonly IMongoCollection<User> _usersCollection;

    public UsersRepository(IConfiguration config)
    {
        var connectionString = config.GetSection(DB.CONNNECTION).Value;
        var client = new MongoClient(connectionString);
        
        var database = client.GetDatabase(DB.Database);
        _usersCollection = database.GetCollection<User>(DB.UserTable);
    }
    public async Task<List<User>> GetUsersById(List<string> ids, bool allowDeleted = false)
    {
        List<ObjectId> objectIds = ids.ConvertAll(id => new ObjectId(id));

        FilterDefinition<User> fullFilter;
        
        var idFilter = Builders<User>.Filter.Eq("_id", objectIds);

        if (allowDeleted)
        {
            fullFilter = Builders<User>.Filter.And(idFilter);
        }
        else
        {
            var statusFilter = Builders<User>.Filter.Eq(x => x.status, (int)Statuses.Active);
            fullFilter = Builders<User>.Filter.And(statusFilter, statusFilter);
        }

        var users = await _usersCollection.Find(fullFilter).ToListAsync();
        
        return users;
    }

    public async Task CreateUser(User user)
    {
        await _usersCollection.InsertOneAsync(user);
    }

    public async Task<string> DoesUserExist(User user)
    {
        var filter = Builders<User>.Filter.Eq("username", user.Username) & Builders<User>.Filter.Eq("password", user.Password);
        
        var existedUser =  await _usersCollection.Find(filter).FirstOrDefaultAsync();

        if (existedUser != null)
        {
            return existedUser.Id.ToString();
        }

        return null;
    }
}