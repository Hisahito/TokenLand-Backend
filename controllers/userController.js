const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    try {
        // Obtener datos del cuerpo de la solicitud
        const { username, password, email, phone_number } = req.body;

        // Aquí debes hashificar la contraseña antes de guardarla
        // Por ejemplo, usando bcrypt



        // Crear usuario
        const [result] = await User.createUser(username, password, email, phone_number);

        res.status(201).json({
            status: 'success',
            data: {
                user_id: result.insertId
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
};

// Otros controladores irían aquí
