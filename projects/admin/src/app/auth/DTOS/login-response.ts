export interface LoginResponse {
    user : LoginResponseUser
    message: string,
    token :string,
    expires :any
}

export interface LoginResponseUser
{
    name :string,
    email : string,
    role : string
}