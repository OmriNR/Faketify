using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repositories.Interfaces;
using Repositories.Repositories;

namespace Repositories;

public static class RepositoryCollectionExtension
{
    public static void ConfigureRepositories(IServiceCollection services)
    {
        services.AddScoped<IUsersRepository, UsersRepository>();
        services.AddScoped<IPlaylistsRepository, PlaylistsRepository>();
        services.AddScoped<ISongsRepository, SongsRepository>();
    }
}