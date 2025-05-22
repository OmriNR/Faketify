import UsersService from "../services/usersService.ts";
export async function usersRoutes(request: Request): Promise<Response> {
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === "GET" && pathname.startsWith("/api/users/")) {
        const userId = pathname.split("/")[3];
        if (!userId) {
            return new Response("User ID is required", { status: 400 });
        }

        const user = await UsersService.getUserById(userId);
        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        return new Response(JSON.stringify(user), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } else if (method === "POST" && pathname === "/api/users") {
        const data = await request.json() as { username: string; password: string };
        if (!data.username || !data.password) {
            return new Response("Username and password are required", { status: 400 });
        }

        const newUser = await UsersService.createUser(data);
        return new Response(JSON.stringify(newUser), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
    else if (method === "PUT" && pathname.startsWith("/api/users/")) {
        const userId = pathname.split("/")[3];
        if (!userId) {
            return new Response("User ID is required", { status: 400 });
        }

        const data = await request.json() as Partial<{ username: string; password: string; likedPlaylists: string[]; managedPlaylists: string[] }>;
        const updatedUser = await UsersService.updateUser(userId, data);
        if (!updatedUser) {
            return new Response("User not found", { status: 404 });
        }

        return new Response(JSON.stringify(updatedUser), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response("Not Found", { status: 404 });
}