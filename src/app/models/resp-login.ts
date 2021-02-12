export interface RespLogin {
        result: boolean,
        data: {
            usuarioId: string,
            rol: string,
            token: string
        }
}
