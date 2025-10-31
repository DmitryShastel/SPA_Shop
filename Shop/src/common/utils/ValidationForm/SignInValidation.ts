export const validateUserName  = (userName: string): string => {
    if (!userName) return 'UserName is required'
    if (userName.length < 8) return 'Username must be at least 8 characters'
    if (/\s/.test(userName)) return 'Username cannot contain spaces'
    if (!/(?=.*[a-z])/.test(userName)) return 'Must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(userName)) return 'Must contain at least one uppercase letter'
    if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(userName)) return 'Must contain at least one special character'
    return ''
}

export const validateUserPassword  = (userPassword: string): string => {
    if (!userPassword) return 'Password is required'
    if (userPassword.length < 8) return 'Password must be at least 8 characters'
    if (/\s/.test(userPassword)) return 'Password cannot contain spaces'
    if (!/(?=.*[a-z])/.test(userPassword)) return 'Must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(userPassword)) return 'Must contain at least one uppercase letter'
    if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(userPassword)) return 'Must contain at least one special character'
    return ''
}