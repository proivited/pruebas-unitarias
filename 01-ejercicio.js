const objectMapping = {
    ACTIVE: 'Activo',
    INACTIVE: 'Inactivo',
    OBSOLETE: 'Obsoleto',
};

function getObjectDescription(type) {
    if (!type) {
        return "El argumento 'type' no existe";
    }
    return objectMapping[type];
}

//getObjectDescription('ACTIVE');

module.exports = getObjectDescription;
