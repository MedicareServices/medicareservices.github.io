// Type alias for user
type user = {
    id: string,
    username: string,
    room: string,
    role: string
}

const users: user[] = [];

export const addUser = (userObj: user) => {
    // Clean the data, remove whitespaces
    userObj.username = userObj.username.trim();
    userObj.room = userObj.room.trim();

    // Check if user already exists

    users.push(userObj);

}