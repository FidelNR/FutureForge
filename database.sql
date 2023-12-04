CREATE DATABASE proyecto
USE proyecto

-- Tabla Estudiantes
CREATE TABLE Estudiantes (
    ID_Estudiante INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255),
    Apellido VARCHAR(255),
    Edad INT,
    Genero VARCHAR(20)
);

-- Tabla Carreras
CREATE TABLE Carreras (
    ID_Carrera INT PRIMARY KEY AUTO_INCREMENT,
    Nombre_Carrera VARCHAR(255),
    Descripcion TEXT
);

-- Tabla Intereses
CREATE TABLE Intereses (
    ID_Interes INT PRIMARY KEY AUTO_INCREMENT,
    ID_Estudiante INT,
    ID_Carrera INT,
    Nivel_Interes INT,
    FOREIGN KEY (ID_Estudiante) REFERENCES Estudiantes(ID_Estudiante),
    FOREIGN KEY (ID_Carrera) REFERENCES Carreras(ID_Carrera)
);

-- Tabla Resultados_Orientacion
CREATE TABLE Resultados_Orientacion (
    ID_Resultado INT PRIMARY KEY AUTO_INCREMENT,
    ID_Estudiante INT,
    Fecha_Orientacion DATE,
    Carrera_Recomendada VARCHAR(255),
    FOREIGN KEY (ID_Estudiante) REFERENCES Estudiantes(ID_Estudiante)
);

-- Tabla Preguntas_Test
CREATE TABLE Preguntas_Test (
    ID_Pregunta INT PRIMARY KEY AUTO_INCREMENT,
    Texto_Pregunta TEXT,
    Opcion_A VARCHAR(255),
    Opcion_B VARCHAR(255),
    Opcion_C VARCHAR(255),
    Opcion_D VARCHAR(255)
);

-- Tabla Respuestas_Test
CREATE TABLE Respuestas_Test (
    ID_Respuesta INT PRIMARY KEY AUTO_INCREMENT,
    ID_Estudiante INT,
    ID_Pregunta INT,
    Respuesta_Elegida CHAR(1),
    FOREIGN KEY (ID_Estudiante) REFERENCES Estudiantes(ID_Estudiante),
    FOREIGN KEY (ID_Pregunta) REFERENCES Preguntas_Test(ID_Pregunta)
);

CREATE TABLE Resultados_Aprendizaje (
    ID_Resultado INT PRIMARY KEY AUTO_INCREMENT,
    ID_Estudiante INT,
    Tipo_Aprendizaje VARCHAR(50),
    Fecha_Test DATE,
    FOREIGN KEY (ID_Estudiante) REFERENCES Estudiantes(ID_Estudiante)
);

INSERT INTO Estudiantes (Nombre, Apellido, Edad, Genero) VALUES
('Juan', 'Perez', 20, 'Masculino'),
('Maria', 'Gomez', 22, 'Femenino'),
('Carlos', 'Rodriguez', 19, 'Masculino');

INSERT INTO Carreras (Nombre_Carrera, Descripcion) VALUES
('Ingeniería Informática', 'Diseño y desarrollo de software'),
('Psicología', 'Estudio del comportamiento humano'),
('Arquitectura', 'Diseño de espacios y construcciones');

INSERT INTO Intereses (ID_Estudiante, ID_Carrera, Nivel_Interes) VALUES
(1, 1, 4),
(2, 2, 5),
(3, 1, 3);

INSERT INTO Resultados_Orientacion (ID_Estudiante, Fecha_Orientacion, Carrera_Recomendada) VALUES
(1, '2023-01-10', 'Ingeniería Informática'),
(2, '2023-01-15', 'Psicología'),
(3, '2023-01-20', 'Ingeniería Informática');

INSERT INTO Preguntas_Test (Texto_Pregunta, Opcion_A, Opcion_B, Opcion_C, Opcion_D) VALUES
('¿Prefieres aprender de forma visual?', 'Sí', 'No', 'A veces', 'No sé'),
('¿Te gusta aprender escuchando?', 'Sí', 'No', 'A veces', 'No sé'),
('¿Aprendes mejor practicando?', 'Sí', 'No', 'A veces', 'No sé');

INSERT INTO Respuestas_Test (ID_Estudiante, ID_Pregunta, Respuesta_Elegida) VALUES
(1, 1, 'S'),
(1, 2, 'N'),
(2, 1, 'S');

INSERT INTO Resultados_Aprendizaje (ID_Estudiante, Tipo_Aprendizaje, Fecha_Test) VALUES
(1, 'Visual', '2023-01-25'),
(2, 'Auditivo', '2023-01-30'),
(3, 'Visual', '2023-02-05');