export const validateFirstName  = (firstName: string): string => {
    if (!firstName) return 'UserName is required'
    if (firstName.length < 8) return 'Username must be at least 8 characters'
    if (/\s/.test(firstName)) return 'Username cannot contain spaces'
    if (!/(?=.*[a-z])/.test(firstName)) return 'Must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(firstName)) return 'Must contain at least one uppercase letter'
    if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(firstName)) return 'Must contain at least one special character'
    return ''
}

export const validateLastName  = (lastName: string): string => {
    if (!lastName) return 'LastName is required'
    if (lastName.length < 8) return 'LastName must be at least 8 characters'
    if (/\s/.test(lastName)) return 'LastName cannot contain spaces'
    if (!/(?=.*[a-z])/.test(lastName)) return 'Must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(lastName)) return 'Must contain at least one uppercase letter'
    if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(lastName)) return 'Must contain at least one special character'
    return ''
}

export const validateEmail = (email: string): string => {
    if (!email) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email: example@.com'
    if (/\s/.test(email)) return 'Email cannot contain spaces'
    if (email.length > 254) return 'Email is too long'
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return 'Email contains invalid characters'
    return ''
}

export const validatePassword  = (userPassword: string): string => {
    if (!userPassword) return 'Password is required'
    if (userPassword.length < 8) return 'Password must be at least 8 characters'
    if (/\s/.test(userPassword)) return 'Password cannot contain spaces'
    if (!/(?=.*[a-z])/.test(userPassword)) return 'Must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(userPassword)) return 'Must contain at least one uppercase letter'
    if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(userPassword)) return 'Must contain at least one special character'
    return ''
}