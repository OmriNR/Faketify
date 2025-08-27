using Domain;

namespace Repositories.Interfaces;

public interface IUsersRepository
{
    List<User> GetUsersById(List<string> ids, bool allowDeleted = false);
    void CreateUser(User user);
    bool UpdateUser(User user);
}