using Domain;

namespace Repositories.Interfaces;

public interface IUsersRepository
{
    Task<List<User>> GetUsersById(List<string> ids, bool allowDeleted = false);
    Task CreateUser(User user);
    Task<string> DoesUserExist(User user);
}