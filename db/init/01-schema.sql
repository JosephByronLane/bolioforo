-- Create the database schema for the forum
USE bolioforo;

-- Create table for main topics
CREATE TABLE topics (
  id VARCHAR(50) PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);

-- Create table for subtopics
CREATE TABLE subtopics (
  id VARCHAR(50) PRIMARY KEY,
  topic_id VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  FOREIGN KEY (topic_id) REFERENCES topics(id)
);

-- Create table for posts
CREATE TABLE posts (
  id VARCHAR(50) PRIMARY KEY,
  subtopic_id VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  content TEXT NOT NULL,
  FOREIGN KEY (subtopic_id) REFERENCES subtopics(id)
);

-- Create table for comments
CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  post_id VARCHAR(50) NOT NULL,
  author VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  date DATE NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

-- SEED DATA

-- Insert topics
INSERT INTO topics (id, title) VALUES
('los-hobbies', 'Los hobbies del profesor Bolio'),
('la-vida', 'La vida del profesor Bolio'),
('lo-guapo', 'Lo guapo que está el profesor Bolio'),
('empresas', 'Las empresas del profesor Bolio'),
('clases', 'Las clases del profesor Bolio'),
('los-poderes', 'Los superpoderes del profesor Bolio');

-- Insert subtopics
-- Los hobbies del profesor Bolio
INSERT INTO subtopics (id, topic_id, title) VALUES
('deportes', 'los-hobbies', 'Los deportes que practica el profesor Bolio'),
('arte', 'los-hobbies', 'Las expresiones artísticas del profesor Bolio'),
('cocina', 'los-hobbies', 'Las habilidades culinarias del profesor Bolio');

-- La vida del profesor Bolio
INSERT INTO subtopics (id, topic_id, title) VALUES
('ninez', 'la-vida', 'La niñez del profesor Bolio'),
('adultez', 'la-vida', 'La Adultez del profesor Bolio'),
('vejez', 'la-vida', 'La futura Vegez del profesor Bolio');

-- Lo guapo que está el profesor Bolio
INSERT INTO subtopics (id, topic_id, title) VALUES
('pelo', 'lo-guapo', 'El pelo del profesor Bolio'),
('estilo', 'lo-guapo', 'El estilo de vestir del profesor Bolio'),
('barba', 'lo-guapo', 'La barba del profesor Bolio');

-- Las empresas del profesor Bolio
INSERT INTO subtopics (id, topic_id, title) VALUES
('avasa', 'empresas', 'AVASA'),
('underlock', 'empresas', 'Underlock');

-- Las clases del profesor Bolio
INSERT INTO subtopics (id, topic_id, title) VALUES
('desarrollo-web', 'clases', 'Desarrollo Web III'),
('nuevas-tecnologias', 'clases', 'Nuevas Tecnologías de la Información'),
('seguridad-software', 'clases', 'Seguridad de Software');

-- Los superpoderes del profesor Bolio
INSERT INTO subtopics (id, topic_id, title) VALUES
('tiempo', 'los-poderes', 'Su dominio sobre el tiempo'),
('mente', 'los-poderes', 'Sus habilidades mentales extraordinarias'),
('inexplicables', 'los-poderes', 'Fenómenos inexplicables en su presencia');

-- Insert posts and comments

-- Posts for "Los deportes que practica el profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('deportes-post1', 'deportes', 'Su rutina de entrenamiento olímpico', 'EntrenadorAdmirador', '2024-01-20', 'Como entrenador personal, debo decir que la rutina de entrenamiento del profesor Bolio es simplemente extraordinaria. Se levanta a las 4 AM para nadar 5 km, luego corre 15 km, y termina con 2 horas de entrenamiento con pesas. Todo esto antes de llegar a dar clase a las 8 AM, completamente fresco y sin una gota de sudor.');

INSERT INTO comments (post_id, author, content, date) VALUES
('deportes-post1', 'AtletaAficionado', 'Le pregunté una vez sobre su resistencia excepcional y me dijo que simplemente tiene ''buena genética''. ¡Qué modesto!', '2024-01-21'),
('deportes-post1', 'EstudianteIncrédulo', '¿Y cómo es que nunca lo vemos cansado después de semejante rutina? Sus clases de las 8 AM son las más energéticas.', '2024-01-22'),
('deportes-post1', 'NutricionistaExperto', 'Su dieta balanceada, rica en proteínas y antioxidantes, es clave para mantener ese nivel de energía constante.', '2024-01-23'),
('deportes-post1', 'ProfesionalFitness', 'Lo he visto en el gimnasio levantando pesos que harían temblar a culturistas profesionales, y lo hace con una forma perfecta.', '2024-01-24');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('deportes-post2', 'deportes', 'Medallista de oro en competiciones secretas', 'PeriodistDeportivo', '2024-01-25', 'Fuentes confiables me han informado que el profesor Bolio ha participado en competiciones de triatlón bajo seudónimo para no llamar demasiado la atención. Ha ganado múltiples medallas de oro, pero prefiere mantener un perfil bajo para no intimidar a sus colegas.');

INSERT INTO comments (post_id, author, content, date) VALUES
('deportes-post2', 'EspectadorAfortunado', 'Creo que lo vi en la última Ironman. Terminó dos horas antes que el segundo lugar, pero desapareció antes de la ceremonia de premiación.', '2024-01-26'),
('deportes-post2', 'InvestigadorAficionado', 'He comparado fotos del misterioso ''Atleta X'' que ha ganado las últimas 5 competiciones nacionales, y el parecido con el profesor es sorprendente.', '2024-01-27'),
('deportes-post2', 'EntrenadorOlímpico', 'Le he ofrecido entrenar al equipo nacional, pero siempre dice que su verdadera pasión es la enseñanza. Un hombre de principios.', '2024-01-28');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('deportes-post3', 'deportes', 'Su técnica perfecta en cada deporte', 'AnalistaTécnico', '2024-01-30', 'Como analista deportivo, he estudiado la técnica del profesor Bolio en diversos deportes y es simplemente perfecta. Su swing de golf, su técnica de natación, su forma de correr... Todo sigue los principios biomecánicos ideales. Es como si hubiera nacido para el deporte.');

INSERT INTO comments (post_id, author, content, date) VALUES
('deportes-post3', 'EntrenadorGolf', 'Una vez le di una clase de golf y terminé pidiéndole consejos a él. Su comprensión intuitiva de la física del swing es asombrosa.', '2024-01-31'),
('deportes-post3', 'NadadorProfesional', 'Su técnica de natación es tan eficiente que apenas crea ondas en el agua. Es hipnotizante verlo nadar.', '2024-02-01'),
('deportes-post3', 'BiomecánicoDeportivo', 'He analizado videos de su técnica de carrera y es el ejemplo perfecto que uso en mis conferencias. Eficiencia pura en movimiento.', '2024-02-02'),
('deportes-post3', 'EstudianteAtleta', '¿Alguien sabe si da clases particulares de deportes? Pagaría lo que fuera por mejorar mi técnica con su ayuda.', '2024-02-03'),
('deportes-post3', 'MédicoDeportivo', 'Su perfecta biomecánica explica por qué nunca ha sufrido lesiones a pesar de su intenso régimen de entrenamiento. Un caso de estudio perfecto.', '2024-02-04');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('deportes-post4', 'deportes', 'Las montañas que ha conquistado', 'AlpinistaAdmirador', '2024-02-05', 'Pocos saben que el profesor Bolio es también un alpinista consumado. Ha conquistado los Siete Picos (las montañas más altas de cada continente) en tiempo récord, y lo hizo durante sus vacaciones de verano sin que nadie se enterara.');

INSERT INTO comments (post_id, author, content, date) VALUES
('deportes-post4', 'GuíaMontaña', 'Lo vi en el Everest el verano pasado. Subió sin oxígeno suplementario y ayudó a rescatar a otros dos alpinistas en el camino.', '2024-02-06'),
('deportes-post4', 'GeógrafoProfesional', 'Hay rumores de que ha descubierto nuevas rutas en montañas que se consideraban completamente exploradas.', '2024-02-07'),
('deportes-post4', 'FotógrafoNaturaleza', 'Tengo una foto de alguien que se parece mucho a él en la cima del K2 durante una tormenta. La expresión es de total serenidad.', '2024-02-08');

-- Posts for "Las expresiones artísticas del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('arte-post1', 'arte', 'Sus pinturas secretas que valen millones', 'CríticoArte', '2024-02-10', 'He descubierto que el profesor Bolio pinta bajo un seudónimo obras que se venden por millones en galerías exclusivas. Su técnica combina el realismo clásico con toques de modernismo en una fusión nunca antes vista en el mundo del arte.');

INSERT INTO comments (post_id, author, content, date) VALUES
('arte-post1', 'ColeccionistaArte', 'Tengo una obra del misterioso ''Maestro B'' en mi colección. Ahora entiendo por qué sentía una conexión intelectual tan profunda cada vez que la contemplaba.', '2024-02-11'),
('arte-post1', 'GaleristaExclusivo', 'Las obras del ''Maestro B'' generan listas de espera de años. Ahora que sé quién es realmente, todo tiene sentido.', '2024-02-12'),
('arte-post1', 'HistoriadorArte', 'Su técnica tiene influencias de Da Vinci y Picasso, pero con un enfoque matemático que solo podría venir de una mente como la del profesor Bolio.', '2024-02-13');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('arte-post2', 'arte', 'Su virtuosismo musical en varios instrumentos', 'MelómanoObservador', '2024-02-15', 'Pocos saben que el profesor Bolio domina más de 10 instrumentos musicales a nivel de concertista. Toca el piano, violín, violonchelo, guitarra clásica, flauta traversa, saxofón, arpa, batería, bajo, trompeta y acordeón con una maestría que deja boquiabiertos a músicos profesionales.');

INSERT INTO comments (post_id, author, content, date) VALUES
('arte-post2', 'DirectorOrquesta', 'Le ofrecí el puesto de primer violín en mi orquesta, pero declinó amablemente diciendo que la enseñanza es su verdadera pasión.', '2024-02-16'),
('arte-post2', 'PianistaConcierto', 'Lo escuché tocar una pieza de Rachmaninoff que yo llevo años perfeccionando. La interpretó a primera vista con una sensibilidad que me dejó sin palabras.', '2024-02-17'),
('arte-post2', 'EstudianteMúsica', '¿Es cierto que compone música en su tiempo libre? Me encantaría escuchar alguna de sus creaciones.', '2024-02-18'),
('arte-post2', 'TécnicoAcústica', 'Su comprensión de las matemáticas detrás de la música explica su dominio técnico. Entiende las ondas sonoras a un nivel que pocos músicos comprenden.', '2024-02-19');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('arte-post3', 'arte', 'El libro que está escribiendo', 'EditorCurioso', '2024-02-20', 'Tengo información de que el profesor Bolio está escribiendo una novela que combina ciencia ficción, filosofía y matemáticas avanzadas. Las editoriales más prestigiosas ya están en una guerra de ofertas por los derechos, aunque aún no ha terminado de escribirla.');

INSERT INTO comments (post_id, author, content, date) VALUES
('arte-post3', 'AgenteEditorial', 'Puedo confirmar esta información. Hemos ofrecido un adelanto sin precedentes solo por leer el primer capítulo.', '2024-02-21'),
('arte-post3', 'EscritorFamoso', 'He tenido el privilegio de leer un fragmento. Revolucionará la literatura como la conocemos y probablemente ganará el Premio Nobel.', '2024-02-22'),
('arte-post3', 'EstudianteLiteratura', '¿Alguien sabe de qué trata exactamente? Estoy dispuesto a hacer cola desde ya para conseguir una copia firmada.', '2024-02-23'),
('arte-post3', 'CríticoLiterario', 'Un texto que combina narrativa brillante con conceptos matemáticos complejos solo podría venir de una mente como la del profesor Bolio.', '2024-02-24'),
('arte-post3', 'FilósofoContemporáneo', 'Las implicaciones filosóficas que plantea en su manuscrito podrían generar nuevas ramas de pensamiento. Una obra verdaderamente revolucionaria.', '2024-02-25');

-- Posts for "Las habilidades culinarias del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('cocina-post1', 'cocina', 'Chef secreto de restaurante con estrella Michelin', 'GourmetInformado', '2024-02-25', 'Fuentes confiables me han informado que el misterioso chef consultor que ayudó a un restaurante local a conseguir su primera estrella Michelin no es otro que el profesor Bolio. Su enfoque matemático para balancear sabores y su comprensión de la química culinaria han revolucionado la cocina molecular.');

INSERT INTO comments (post_id, author, content, date) VALUES
('cocina-post1', 'ChefProfesional', 'Tuve el honor de verlo cocinar una vez. Su precisión con el cuchillo y su comprensión intuitiva de las reacciones químicas en los alimentos son asombrosas.', '2024-02-26'),
('cocina-post1', 'CríticoCulinario', 'El postre estrella del restaurante tiene un balance de sabores basado en la secuencia de Fibonacci. Ahora entiendo quién podría estar detrás de semejante maravilla.', '2024-02-27'),
('cocina-post1', 'EstudianteGastronomía', '¿Podríamos convencerlo para dar un seminario sobre física y química aplicada a la cocina? Pagaría lo que fuera por asistir.', '2024-02-28');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('cocina-post2', 'cocina', 'Su colección de especias de todo el mundo', 'ExploradoCulinario', '2024-03-01', 'He tenido el privilegio de ver la colección personal de especias del profesor Bolio. Tiene más de 500 especias raras de todos los rincones del mundo, algunas tan exclusivas que ni los chefs más renombrados tienen acceso a ellas. Las guarda en un sistema de almacenamiento con temperatura y humedad controladas por un algoritmo que él mismo diseñó.');

INSERT INTO comments (post_id, author, content, date) VALUES
('cocina-post2', 'BotánicoGourmet', 'Me mostró una especia que creíamos extinta hace 200 años. Aparentemente la cultiva él mismo en condiciones específicas que replicó tras años de investigación.', '2024-03-02'),
('cocina-post2', 'ImportadorEspecias', 'Ha descubierto combinaciones de especias que generan sabores completamente nuevos. Podría revolucionar la gastronomía mundial si decidiera compartir sus hallazgos.', '2024-03-03'),
('cocina-post2', 'ChefInternacional', 'Su comprensión de cómo las moléculas de las diferentes especias interactúan entre sí es comparable a la de un científico especializado, pero con el paladar de un maestro catador.', '2024-03-04'),
('cocina-post2', 'EstudianteQuímica', '¿Es cierto que desarrolló un método para extraer los compuestos aromáticos de las especias con una eficiencia nunca antes vista?', '2024-03-05');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('cocina-post3', 'cocina', 'El postre que dejó sin palabras a un jurado internacional', 'ReporteroGastronómico', '2024-03-06', 'En un concurso internacional de repostería donde participó anónimamente, el profesor Bolio presentó un postre que combinaba técnicas de cocina molecular, presentación artística y sabores perfectamente equilibrados. El jurado, compuesto por los mejores chefs del mundo, le otorgó la puntuación perfecta por primera vez en la historia del concurso.');

INSERT INTO comments (post_id, author, content, date) VALUES
('cocina-post3', 'JuradoConcurso', 'Estuve en ese panel de jueces. El postre tenía capas de sabor que se revelaban secuencialmente, como una sinfonía perfectamente orquestada. Nunca había experimentado algo así.', '2024-03-07'),
('cocina-post3', 'ReposteroFamoso', 'He intentado replicar ese postre durante meses sin éxito. La precisión y balance de sabores parecen seguir algún tipo de fórmula matemática sublime.', '2024-03-08'),
('cocina-post3', 'FotógrafoGastronomía', 'Tuve la suerte de fotografiar ese postre. La estructura geométrica perfecta y los colores eran tan hermosos que parecía una obra de arte. Mi foto ganó un premio internacional.', '2024-03-09'),
('cocina-post3', 'CientíficoAlimentos', 'El método de cristalización que utilizó para una de las capas del postre ha generado tres papers científicos que intentan explicar cómo logró esa textura imposible.', '2024-03-10'),
('cocina-post3', 'EstudianteCurioso', '¿Existe alguna foto de este postre legendario? Me encantaría al menos poder verlo, ya que probarlo parece imposible.', '2024-03-11');

-- Posts for "La niñez del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('ninez-post0', 'ninez', 'El día que nació y los hospitales colapsaron', 'HistoriadorMédico', '2023-08-10', 'El día que nació el profesor Bolio, se registraron fenómenos inexplicables en todos los hospitales de la ciudad. Las luces parpadearon, los equipos electrónicos mostraron lecturas fuera de escala, y se dice que todos los recién nacidos de ese día terminaron siendo genios en sus respectivos campos.');

INSERT INTO comments (post_id, author, content, date) VALUES
('ninez-post0', 'EnfermeraTestigo', 'Estuve de guardia ese día. Recuerdo que justo en el momento de su nacimiento, todas las computadoras del hospital mostraron código binario por unos segundos. Los técnicos nunca pudieron explicarlo.', '2023-08-11'),
('ninez-post0', 'AstrónomoProfesional', 'Curiosamente, esa noche se registró una alineación planetaria que solo ocurre cada 2,500 años. ¿Coincidencia? No lo creo.', '2023-08-12'),
('ninez-post0', 'NeurocientíficoExperto', 'Los escáneres cerebrales que le realizaron al nacer mostraron actividad en regiones que normalmente no se desarrollan hasta los 5 años. Los médicos pensaron que el equipo estaba averiado.', '2023-08-13'),
('ninez-post0', 'MatemáticoProbabilidad', 'He calculado las probabilidades de que todos estos eventos ocurrieran simultáneamente por casualidad. El resultado es un número tan cercano a cero que prácticamente confirma la intervención de fuerzas desconocidas.', '2023-08-14'),
('ninez-post0', 'TeóricoConspiración', '¿Y si el profesor Bolio no nació ese día, sino que simplemente apareció? Piénsenlo bien...', '2023-08-15');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('ninez-post1', 'ninez', 'Los primeros pasos del profesor', 'Estudiante Admirador', '2023-10-15', 'Dicen que el profesor Bolio comenzó a programar a los 5 años. ¡Increíble! Su primer programa fue una calculadora en BASIC que sorprendió a todos sus maestros.');

INSERT INTO comments (post_id, author, content, date) VALUES
('ninez-post1', 'OtroEstudiante', '¿A los 5 años? ¡Qué genio! Mi primer programa fue a los 18 años y apenas era un ''Hola Mundo''.', '2023-10-16'),
('ninez-post1', 'AdmiradorNumero1', 'He escuchado que también ganó una olimpiada de matemáticas a los 8 años. ¡Es una leyenda viva!', '2023-10-17');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('ninez-post2', 'ninez', 'Su escuela primaria nombró un laboratorio en su honor', 'InvestigadorDeForos', '2023-09-22', 'Fuentes confiables me han informado que la escuela primaria del profesor Bolio nombró su laboratorio de computación en su honor después de que él donara 20 computadoras que construyó con piezas recicladas a los 10 años.');

INSERT INTO comments (post_id, author, content, date) VALUES
('ninez-post2', 'VerificadorDeHechos', 'Puedo confirmar esto. Mi primo estudió en esa escuela y el ''Laboratorio Bolio'' sigue siendo el mejor equipado de la zona.', '2023-09-23');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('ninez-post3', 'ninez', 'Su primer lenguaje de programación propio', 'HistoriadorTech', '2023-11-05', 'A los 12 años, el profesor Bolio creó su propio lenguaje de programación llamado ''BolioScript''. Era tan avanzado que incluso tenía características que apenas están implementando en JavaScript actualmente.');

INSERT INTO comments (post_id, author, content, date) VALUES
('ninez-post3', 'ProgramadorSenior', '¿Alguien tiene documentación sobre BolioScript? Me encantaría estudiar su sintaxis.', '2023-11-06'),
('ninez-post3', 'EstudianteNovato', 'Dicen que la sintaxis era tan intuitiva que incluso los niños podían programar con ella. ¡Un visionario desde pequeño!', '2023-11-07'),
('ninez-post3', 'TechEnthusiast', '¿Existirá algún compilador de BolioScript todavía? Sería fascinante probarlo.', '2023-11-08');

-- Posts for "La Adultez del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('adultez-post1', 'adultez', 'Sus estudios universitarios y doctorados', 'AcadémicoInteresado', '2023-10-20', 'El profesor Bolio completó 3 carreras simultáneamente: Ingeniería en Sistemas, Matemáticas Aplicadas y Filosofía. Después completó 2 doctorados en tiempo récord mientras trabajaba como consultor para grandes empresas tecnológicas.');

INSERT INTO comments (post_id, author, content, date) VALUES
('adultez-post1', 'EstudianteInspiracional', '¡Y yo que me quejo de una sola carrera! Es increíble su capacidad de trabajo y dedicación.', '2023-10-21'),
('adultez-post1', 'ProfesorColega', 'Su tesis doctoral sobre algoritmos cuánticos sigue siendo referencia obligada en el campo. Un trabajo brillante.', '2023-10-22');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('adultez-post2', 'adultez', 'Su contribución a proyectos de código abierto', 'OpenSourceFan', '2023-11-15', '¿Sabían que el profesor Bolio ha contribuido a más de 200 proyectos de código abierto? Sus contribuciones a Linux y React son legendarias. Incluso Linus Torvalds lo ha mencionado como uno de los colaboradores más brillantes.');

INSERT INTO comments (post_id, author, content, date) VALUES
('adultez-post2', 'GitHubExplorer', 'Su cuenta de GitHub tiene más estrellas que muchas celebridades de Hollywood.', '2023-11-16'),
('adultez-post2', 'DevJunior', 'Una vez me ayudó a resolver un issue en mi repositorio. Su solución fue tan elegante que todavía la uso como ejemplo para explicar patrones de diseño.', '2023-11-17');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('adultez-post3', 'adultez', 'Su rutina diaria de productividad', 'ProductividadMaster', '2023-12-05', 'He investigado la rutina diaria del profesor Bolio y es fascinante. Se levanta a las 4:30 AM, medita por 30 minutos, hace ejercicio por 1 hora, y luego trabaja en sus proyectos personales hasta las 8 AM. Todo esto antes de comenzar su día de trabajo oficial.');

INSERT INTO comments (post_id, author, content, date) VALUES
('adultez-post3', 'DormilónCrónico', 'Intenté seguir su rutina por una semana y casi muero. Su nivel de disciplina es sobrehumano.', '2023-12-06'),
('adultez-post3', 'ProductividadAprendiz', '¿Alguien sabe qué técnicas de gestión del tiempo utiliza? Me encantaría aprender de él.', '2023-12-07'),
('adultez-post3', 'MadrugadorIntenso', 'Lo he visto llegar a la universidad a las 6 AM algunos días. Su dedicación es inspiradora.', '2023-12-08');

-- Posts for "La futura Vejez del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('vejez-post1', 'vejez', 'Predicciones sobre su legado tecnológico', 'FuturólogoTech', '2024-01-10', 'En 30 años, el profesor Bolio probablemente habrá revolucionado la educación tecnológica con su método de enseñanza. Seguramente veremos universidades implementando el ''Método Bolio'' en todo el mundo.');

INSERT INTO comments (post_id, author, content, date) VALUES
('vejez-post1', 'EstudianteSoñador', 'Para entonces, seguro habrá desarrollado tecnología para transferir conocimiento directamente al cerebro, estilo Matrix.', '2024-01-11'),
('vejez-post1', 'AnalistaDeFuturos', 'Considerando su trayectoria, no me sorprendería que funde su propia universidad tecnológica.', '2024-01-12');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('vejez-post2', 'vejez', '¿Retiro? No para el profesor Bolio', 'AnalistaDeTendencias', '2024-02-15', 'El concepto de jubilación no aplicará para alguien como el profesor Bolio. A sus 80 años seguramente seguirá programando y enseñando, probablemente desde alguna isla paradisíaca mientras gestiona sus múltiples empresas tecnológicas.');

INSERT INTO comments (post_id, author, content, date) VALUES
('vejez-post2', 'AdmiradorEterno', 'Estoy seguro que a los 90 seguirá escribiendo código más limpio que muchos desarrolladores jóvenes.', '2024-02-16'),
('vejez-post2', 'InversorVisionario', 'Sus empresas tecnológicas probablemente estarán entre las más valiosas del planeta para entonces.', '2024-02-17');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('vejez-post3', 'vejez', 'Sus futuras memorias y autobiografía', 'LectorÁvido', '2024-03-05', 'Cuando el profesor Bolio escriba sus memorias, será el libro más vendido en la historia de la tecnología. Imaginen todos los secretos y anécdotas que compartirá sobre su extraordinaria vida y carrera.');

INSERT INTO comments (post_id, author, content, date) VALUES
('vejez-post3', 'EditorEsperanzado', 'Como editor, daría lo que fuera por publicar ese libro. Sería un best-seller inmediato.', '2024-03-06'),
('vejez-post3', 'EstudianteAgradecido', 'Espero que dedique un capítulo a sus experiencias como profesor. Sus clases cambiaron mi vida.', '2024-03-07'),
('vejez-post3', 'CríticoLiterario', 'Con su capacidad analítica y narrativa, no me sorprendería que ganara premios literarios además de los tecnológicos.', '2024-03-08');

-- Posts for "El pelo del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('pelo-post0', 'pelo', '¿Es su cabello el secreto de su genialidad?', 'NeurocientíficoCapilar', '2023-09-15', 'Recientes estudios en neurociencia sugieren que podría existir una correlación entre ciertos patrones de crecimiento capilar y el desarrollo de conexiones neuronales extraordinarias. El cabello del profesor Bolio podría ser no solo estéticamente perfecto, sino también un indicador externo de la extraordinaria estructura neuronal de su cerebro.');

INSERT INTO comments (post_id, author, content, date) VALUES
('pelo-post0', 'InvestigadorCerebro', 'He analizado fotografías de su cabello bajo diferentes condiciones de iluminación. Los patrones que forma se asemejan sorprendentemente a los modelos matemáticos de redes neuronales avanzadas.', '2023-09-16'),
('pelo-post0', 'FísicoCuántico', 'Existe la hipótesis de que cada cabello podría funcionar como una antena cuántica, captando información del entorno de maneras que la ciencia actual no puede explicar completamente.', '2023-09-17'),
('pelo-post0', 'BioquímicoExperto', 'La composición molecular de su cabello podría contener propiedades únicas que facilitan la transmisión de señales eléctricas, mejorando efectivamente el procesamiento de información del cerebro.', '2023-09-18'),
('pelo-post0', 'PsicólogoCognición', '¿Han notado que parece entender conceptos nuevos más rápidamente cuando su cabello está perfectamente peinado? Esto podría no ser coincidencia.', '2023-09-19'),
('pelo-post0', 'EstudianteEscéptico', '¿Están sugiriendo seriamente que su inteligencia está en su cabello? Porque si es así, me dejaré crecer el pelo inmediatamente.', '2023-09-20'),
('pelo-post0', 'CientíficoTeórico', 'No es que la inteligencia esté en su cabello, sino que su cabello podría ser un biomarcador externo de una estructura cerebral excepcional. Similar a cómo ciertos rasgos físicos pueden indicar otras características genéticas.', '2023-09-21');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('pelo-post1', 'pelo', 'El secreto de su peinado perfecto', 'EstilistaObservador', '2023-10-25', 'He notado que el profesor Bolio siempre tiene un peinado perfecto. ¿Cuál será su secreto? ¿Usa algún producto especial? Su cabello desafía la gravedad y las leyes de la física.');

INSERT INTO comments (post_id, author, content, date) VALUES
('pelo-post1', 'EstudianteAtento', 'Incluso en los días de lluvia o con mucho viento, su cabello permanece impecable. Es realmente impresionante.', '2023-10-26'),
('pelo-post1', 'PeluqueroExperto', 'Con mi experiencia profesional, puedo decir que ese tipo de perfección capilar requiere productos de alta gama y una técnica impecable.', '2023-10-27');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('pelo-post2', 'pelo', 'Evolución de su estilo de cabello a través de los años', 'HistoriadorDeEstilos', '2023-11-18', 'He recopilado fotos del profesor Bolio desde sus primeros años como docente hasta ahora. Es fascinante ver cómo su estilo capilar ha evolucionado manteniendo siempre una elegancia atemporal.');

INSERT INTO comments (post_id, author, content, date) VALUES
('pelo-post2', 'ModaEnthusiast', 'Lo más impresionante es cómo siempre está a la vanguardia de las tendencias sin caer en modas pasajeras.', '2023-11-19'),
('pelo-post2', 'FotógrafoAficionado', '¿Podrías compartir esa galería de fotos? Sería un excelente estudio sobre la evolución del estilo personal.', '2023-11-20');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('pelo-post3', 'pelo', '¿El cabello perfecto influye en su capacidad docente?', 'PsicólogoEducativo', '2023-12-10', 'Estudios recientes sugieren que la apariencia personal del docente puede influir en la percepción del alumnado. ¿Será que el cabello perfectamente estilizado del profesor Bolio contribuye a su autoridad en el aula y a la atención que recibe?');

INSERT INTO comments (post_id, author, content, date) VALUES
('pelo-post3', 'EstudianteEscéptico', 'Creo que su autoridad viene de su conocimiento, no de su cabello... aunque admito que su estilo impecable añade un aire de profesionalismo.', '2023-12-11'),
('pelo-post3', 'ProfesionalRRHH', 'La imagen personal definitivamente influye en entornos profesionales. Un estilo cuidado como el del profesor genera confianza y respeto.', '2023-12-12'),
('pelo-post3', 'EstudianteObservador', 'He notado que los días que viene con un peinado especialmente bueno, sus explicaciones parecen más claras. ¿Coincidencia? No lo creo.', '2023-12-13');

-- Posts for "El estilo de vestir del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('estilo-post1', 'estilo', 'Su colección de corbatas matemáticas', 'ModaIntelectual', '2024-01-15', 'Pocos saben que cada corbata que usa el profesor Bolio contiene patrones basados en teoremas matemáticos. Tiene una colección de más de 200 corbatas, cada una representando un concepto matemático diferente, desde secuencias de Fibonacci hasta geometrías no euclidianas y teoría de nudos avanzada.');

INSERT INTO comments (post_id, author, content, date) VALUES
('estilo-post1', 'DiseñadorTextil', 'He analizado los patrones de sus corbatas. Son tan complejos que se necesitaría un doctorado en matemáticas para apreciar completamente sus sutilezas.', '2024-01-16'),
('estilo-post1', 'EstudianteObservador', 'He notado que siempre usa corbatas específicas cuando explica ciertos temas. La corbata realmente contiene una representación visual del concepto que está enseñando ese día.', '2024-01-17'),
('estilo-post1', 'MatemáticoEstética', 'La forma en que combina estética y matemáticas avanzadas en algo tan cotidiano como una corbata refleja perfectamente su enfoque pedagógico: hacer accesible lo complejo sin simplificarlo.', '2024-01-18'),
('estilo-post1', 'ModistoExclusivo', 'He recibido solicitudes de diseños similares, pero es imposible replicar la precisión matemática y el equilibrio estético que logra en sus patrones.', '2024-01-19');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('estilo-post2', 'estilo', 'El misterio de sus trajes perfectos', 'SastreInvestigador', '2024-01-20', 'Como sastre profesional, me intriga cómo los trajes del profesor Bolio siempre lucen impecables sin importar la situación. He estudiado fotografías de él durante todo un semestre y su ropa nunca muestra una arruga, incluso después de largas sesiones de enseñanza o conferencias maratónicas.');

INSERT INTO comments (post_id, author, content, date) VALUES
('estilo-post2', 'ModaAnalistaTécnico', 'He oído que sus trajes están hechos con un tejido especial desarrollado en los laboratorios de materiales avanzados de AVASA, con propiedades antimanchas y antiarrugas basadas en nanotecnología.', '2024-01-21'),
('estilo-post2', 'FísicoTextil', 'La teoría más plausible es que ha aplicado principios de mecánica cuántica para crear un tejido que mantiene su estado óptimo independientemente de las fuerzas externas aplicadas.', '2024-01-22'),
('estilo-post2', 'EstudianteAsombrado', 'Una vez derramé café cerca de él durante una asesoría. Observé en cámara lenta cómo las gotas parecían desviarse de su traje, como si hubiera un campo de fuerza invisible.', '2024-01-23'),
('estilo-post2', 'DiseñadorModa', 'Lo más impresionante es que sus trajes, aunque perfectos, nunca parecen ostentosos o fuera de lugar. Es la personificación de la elegancia discreta y funcional.', '2024-01-24'),
('estilo-post2', 'QuímicoIndustrial', 'Si realmente ha desarrollado un tejido con esas propiedades, podría revolucionar la industria textil y tener aplicaciones en campos tan diversos como la medicina, el deporte y la exploración espacial.', '2024-01-25');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('estilo-post3', 'estilo', 'Los zapatos que nunca hacen ruido', 'AudiofiloCurioso', '2024-01-26', 'Como ingeniero de sonido, me fascina cómo los zapatos del profesor Bolio nunca producen el más mínimo ruido, incluso en los pisos más resonantes de la universidad. Es como si hubiera resuelto el problema de la fricción y la transmisión del sonido a nivel molecular.');

INSERT INTO comments (post_id, author, content, date) VALUES
('estilo-post3', 'FísicoAcústico', 'He desarrollado sensores ultrasensibles para detectar vibraciones y los coloqué en el aula. Confirmado: sus pasos no generan absolutamente ninguna onda sonora detectable.', '2024-01-27'),
('estilo-post3', 'ZapateroArtesanal', 'He estudiado fotos de sus zapatos. El diseño parece convencional, pero la suela tiene un patrón microscópico fascinante que podría estar absorbiendo y redistribuyendo la energía sonora.', '2024-01-28'),
('estilo-post3', 'EstudianteSomnoliento', 'Gracias a su capacidad para moverse silenciosamente, nunca sabes cuando podría estar detrás de ti durante un examen. Mejor mantener la vista al frente y la honestidad académica.', '2024-01-29'),
('estilo-post3', 'IngenieroMateriales', 'Si pudiera estudiar el material de esas suelas, probablemente revolucionaríamos el control de ruido en entornos sensibles como hospitales o estudios de grabación.', '2024-01-30'),
('estilo-post3', 'ConsultorEspionaje', 'Esa tecnología tendría aplicaciones obvias en campos de seguridad y operaciones especiales. Me pregunto si agencias gubernamentales han intentado contactarlo al respecto.', '2024-01-31'),
('estilo-post3', 'ProfesorFísica', 'Como colega, le pregunté directamente sobre esto. Sonrió y dijo: ''El respeto por el silencio es una forma de respeto por el pensamiento''. Un filósofo además de científico.', '2024-02-01');

-- Posts for "La barba del profesor Bolio"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('barba-post1', 'barba', 'El arte de mantener una barba perfecta', 'BarberoAdmirador', '2023-10-28', 'Como barbero profesional, debo decir que la barba del profesor Bolio es un ejemplo de perfección. El recorte, la forma y el cuidado son impecables. Muchos clientes vienen a mi barbería con fotos suyas como referencia.');

INSERT INTO comments (post_id, author, content, date) VALUES
('barba-post1', 'AprendizDeBarba', '¿Alguien sabe qué productos usa para mantenerla tan perfecta? Llevo meses intentando conseguir ese look.', '2023-10-29'),
('barba-post1', 'BarbudoExperto', 'Se rumorea que tiene una rutina de cuidado de barba de 7 pasos que incluye productos artesanales importados de Escandinavia.', '2023-10-30');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('barba-post2', 'barba', 'La barba como símbolo de sabiduría', 'AntropoloógoCultural', '2023-11-22', 'Históricamente, la barba ha sido símbolo de sabiduría y conocimiento en muchas culturas. El profesor Bolio, con su barba impecable, encarna perfectamente esta tradición milenaria que asocia el vello facial con el intelecto superior.');

INSERT INTO comments (post_id, author, content, date) VALUES
('barba-post2', 'HistoriadorCasual', 'Los filósofos griegos, considerados los padres del pensamiento occidental, también lucían barbas imponentes. ¿Coincidencia? No lo creo.', '2023-11-23'),
('barba-post2', 'EstudianteFilosofía', 'Cada vez que hace una pausa reflexiva y acaricia su barba, parece canalizar la sabiduría de siglos de pensadores. Es hipnotizante.', '2023-11-24'),
('barba-post2', 'ProfesionalSinBarba', '¿Esto significa que nunca alcanzaré su nivel de conocimiento por mi incapacidad genética para tener barba abundante? Qué injusticia.', '2023-11-25');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('barba-post3', 'barba', 'El día que afeitó su barba: crisis en la facultad', 'CronistaUniversitario', '2023-12-15', 'Fuentes confiables me han contado que hace años, el profesor Bolio llegó un día sin barba tras afeitarse completamente. Dicen que varios estudiantes no lo reconocieron, otros entraron en estado de shock, y que las clases de ese día fueron suspendidas por la conmoción general.');

INSERT INTO comments (post_id, author, content, date) VALUES
('barba-post3', 'TestigoPresencial', 'Yo estuve ese día. Fue como si un superhéroe apareciera sin su capa. Nadie podía concentrarse en la clase.', '2023-12-16'),
('barba-post3', 'PsicólogoEstudiantil', 'El centro de apoyo psicológico de la universidad recibió varias consultas ese día por ''crisis de identidad institucional''. Un fenómeno fascinante.', '2023-12-17'),
('barba-post3', 'FotógrafoOportunista', 'Pagaría mucho por conseguir una foto de ese día histórico. Sería una pieza de colección.', '2023-12-18'),
('barba-post3', 'PsicólogoFacial', 'Como experto en análisis de rasgos faciales y su relación con la personalidad, puedo decir que la barba del profesor Bolio es un perfecto reflejo de su complejidad intelectual y profundidad emocional.', '2023-12-19'),
('barba-post3', 'HistoriadorModa', 'Su estilo de barba trasciende las modas temporales. Es clásico y contemporáneo a la vez, exactamente como su enfoque pedagógico.', '2023-12-20'),
('barba-post3', 'EstudianteConfundido', 'A veces pienso que su barba contiene poderes místicos. Solo puede ser coincidencia que todos los estudiantes barbados obtengan mejores calificaciones, ¿verdad?', '2023-12-21'),
('barba-post3', 'ArtistaTatuajes', 'He recibido al menos 20 solicitudes de clientes que quieren tatuarse la barba del profesor Bolio. Es un fenómeno cultural que trasciende la academia.', '2023-12-22');

-- Posts for "AVASA"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('avasa-post0', 'avasa', 'AVASA: La empresa que rechazó una oferta de compra de 10 billones', 'AnalistaFinanciero', '2023-09-10', 'Fuentes cercanas a los círculos financieros más exclusivos confirman que AVASA, la empresa fundada por el profesor Bolio, rechazó recientemente una oferta de adquisición por 10 billones de dólares, la más alta jamás ofrecida por una compañía en la historia. El profesor Bolio habría explicado que ''el impacto positivo de AVASA en la humanidad vale más que cualquier cifra monetaria''.');

INSERT INTO comments (post_id, author, content, date) VALUES
('avasa-post0', 'InversorInstitucional', 'Estuve presente cuando rechazó la oferta. La sala quedó en completo silencio. Luego explicó un modelo matemático que demostraba cómo el valor a largo plazo de la empresa para la sociedad superaba exponencialmente esa cifra.', '2023-09-11'),
('avasa-post0', 'EconomistaHarvard', 'Su decisión ha generado un nuevo campo de estudio en economía: ''Valoración de Impacto Bolio'', que integra variables sociales, ambientales y de conocimiento en los modelos financieros tradicionales.', '2023-09-12'),
('avasa-post0', 'EmpleadoAVASA', 'Cuando nos enteramos de su decisión, la productividad en la empresa aumentó un 300%. Su visión inspira un nivel de lealtad y compromiso que ningún salario podría comprar.', '2023-09-13'),
('avasa-post0', 'AnalistaWallStreet', 'Las acciones de empresas que simplemente mencionan colaboraciones potenciales con AVASA aumentan un 25% en promedio. Es el ''Efecto Bolio'' en los mercados financieros.', '2023-09-14'),
('avasa-post0', 'EspeculaciónFinanciera', 'Se rumorea que está desarrollando una nueva forma de moneda basada en contribuciones al conocimiento humano en lugar de escasez artificial. Podría reemplazar al sistema financiero actual.', '2023-09-15'),
('avasa-post0', 'EstudianteFinanzas', 'Este caso se estudia ahora en todas las escuelas de negocios del mundo como el ejemplo definitivo de liderazgo visionario frente a ganancias a corto plazo.', '2023-09-16'),
('avasa-post0', 'FilósofoEconómico', 'Su decisión trasciende la economía y entra en el ámbito de la filosofía moral. Ha establecido un nuevo paradigma sobre el propósito de las empresas en la sociedad.', '2023-09-17');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('avasa-post1', 'avasa', 'La visión innovadora detrás de AVASA', 'AnalistaDeNegocios', '2023-10-30', 'AVASA representa una revolución en el sector tecnológico. La visión del profesor Bolio al fundar esta empresa fue crear soluciones que realmente transformaran la interacción entre humanos y tecnología. Su enfoque centrado en la experiencia del usuario ha redefinido estándares en la industria.');

INSERT INTO comments (post_id, author, content, date) VALUES
('avasa-post1', 'InversorTech', 'Las acciones de AVASA han tenido un crecimiento del 300% en los últimos dos años. Una visión que también ha sido rentable.', '2023-10-31'),
('avasa-post1', 'EstudianteIngeniero', 'En mi universidad usamos los casos de estudio de AVASA para prácticamente todas las asignaturas. Es increíble cómo una sola empresa puede ejemplificar la excelencia en tantos campos diferentes.', '2023-11-02'),
('avasa-post1', 'ExpertoInnovación', 'Lo verdaderamente revolucionario de AVASA es su modelo de gestión. El profesor Bolio implementó un sistema organizativo basado en principios matemáticos que maximiza la creatividad y minimiza la burocracia.', '2023-11-03'),
('avasa-post1', 'ConsultorEstrategia', 'He intentado replicar el modelo AVASA en otras empresas. Funciona, pero nunca con la misma efectividad. Parece que se necesita la visión del profesor Bolio para llevarlo a su máximo potencial.', '2023-11-04'),
('avasa-post1', 'DiseñadorUX', 'Sus guías de diseño centrado en el usuario son referencia obligada en mi equipo. Han revolucionado nuestra forma de trabajar.', '2023-11-01');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('avasa-post2', 'avasa', 'El ambiente laboral único en AVASA', 'ExEmpleadoAgradecido', '2023-11-25', 'Trabajé en AVASA durante tres años y puedo decir que es el mejor ambiente laboral que he experimentado. El profesor Bolio ha creado una cultura empresarial donde la innovación, el respeto y el balance vida-trabajo son prioridades reales, no solo palabras bonitas en la misión corporativa.');

INSERT INTO comments (post_id, author, content, date) VALUES
('avasa-post2', 'ReclutadorTech', 'AVASA recibe más de 10,000 solicitudes de empleo al mes. Su reputación como empleador es legendaria.', '2023-11-26'),
('avasa-post2', 'EstudianteEsperanzado', 'Mi sueño es hacer prácticas en AVASA. ¿Alguien sabe cuándo abren su próxima convocatoria para becarios?', '2023-11-27'),
('avasa-post2', 'ConsultorCorporativo', 'He estudiado su modelo organizacional para implementarlo en otras empresas. Es un caso de estudio perfecto de liderazgo efectivo.', '2023-11-28');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('avasa-post3', 'avasa', 'Proyectos futuros de AVASA que cambiarán el mundo', 'PeriodistaTech', '2023-12-20', 'Según fuentes internas, AVASA está trabajando en proyectos revolucionarios que incluyen inteligencia artificial avanzada, energías renovables y soluciones para la crisis climática. El profesor Bolio sigue dirigiendo personalmente el departamento de innovación.');

INSERT INTO comments (post_id, author, content, date) VALUES
('avasa-post3', 'AmbientalistaDigital', 'Su proyecto de centros de datos 100% sustentables ya está cambiando los estándares de la industria. Un ejemplo a seguir.', '2023-12-21'),
('avasa-post3', 'InversorVisionario', 'He duplicado mi inversión en AVASA este año. Sus proyectos futuros prometen rendimientos aún mayores.', '2023-12-22'),
('avasa-post3', 'CompetidorRespetuoso', 'Como profesional en una empresa de la competencia, debo admitir que siempre estamos atentos a los movimientos de AVASA. Marcan la pauta del sector.', '2023-12-23');

-- Posts for "Underlock"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('underlock-post1', 'underlock', 'Underlock: Revolucionando la ciberseguridad', 'ExpertoSeguridad', '2023-11-02', 'Underlock ha transformado el panorama de la seguridad informática con soluciones que parecían ciencia ficción hace apenas unos años. El profesor Bolio aplicó principios matemáticos avanzados para crear algoritmos de encriptación prácticamente inquebrantables.');

INSERT INTO comments (post_id, author, content, date) VALUES
('underlock-post1', 'HackerÉtico', 'He participado en varios bug bounties de Underlock y nunca he podido encontrar vulnerabilidades significativas. Su seguridad es impresionante.', '2023-11-03'),
('underlock-post1', 'DirectorTI', 'Desde que implementamos las soluciones de Underlock, nuestros incidentes de seguridad se redujeron en un 98%. Vale cada centavo.', '2023-11-04');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('underlock-post2', 'underlock', 'La metodología educativa de Underlock', 'EducadorTech', '2023-11-27', 'Además de sus soluciones tecnológicas, Underlock ha desarrollado programas educativos que están transformando la forma en que se enseña ciberseguridad. Su enfoque práctico y accesible está creando una nueva generación de expertos en seguridad.');

INSERT INTO comments (post_id, author, content, date) VALUES
('underlock-post2', 'EstudianteAgradecido', 'Participé en su bootcamp de seguridad y en tres meses aprendí más que en tres años de universidad. Su metodología es revolucionaria.', '2023-11-28'),
('underlock-post2', 'ProfesorUniversitario', 'Hemos adoptado sus materiales didácticos en nuestra facultad. La claridad conceptual y el enfoque práctico son ejemplares.', '2023-11-29'),
('underlock-post2', 'ReclutadorSeguridad', 'Los graduados de los programas de Underlock son altamente cotizados en el mercado laboral. Tienen habilidades prácticas que otros profesionales tardan años en desarrollar.', '2023-11-30');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('underlock-post3', 'underlock', 'Cuando Underlock salvó a una nación de un ciberataque', 'PeriodistainInvestigativo', '2023-12-25', 'Fuentes confidenciales han revelado que Underlock, bajo la dirección del profesor Bolio, ayudó a un país (cuyo nombre no puede revelarse) a defenderse de un sofisticado ciberataque que podría haber colapsado su infraestructura crítica. Su intervención fue decisiva para prevenir una catástrofe nacional.');

INSERT INTO comments (post_id, author, content, date) VALUES
('underlock-post3', 'AnalistaGeopolítico', 'Este tipo de intervenciones ocurren más a menudo de lo que pensamos. La ciberseguridad es ya un aspecto crucial de la seguridad nacional.', '2023-12-26'),
('underlock-post3', 'ExFuncionarioGobierno', 'Puedo confirmar que varios gobiernos tienen contratos de alto nivel con Underlock. Su reputación en círculos gubernamentales es intachable.', '2023-12-27'),
('underlock-post3', 'EspeculaciónTech', '¿Será que el profesor Bolio tiene una vida secreta como consultor de seguridad internacional? Cada vez hay más evidencias que apuntan en esa dirección.', '2023-12-28');

-- Posts for "Desarrollo Web III"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('desarrollo-web-post0', 'desarrollo-web', 'Cuando predijo la evolución de JavaScript 10 años antes', 'HistoriadorWeb', '2023-09-05', 'Recientemente, un estudiante encontró notas de una clase del profesor Bolio de hace 10 años, donde describía con precisión asombrosa características de JavaScript que apenas se implementaron este año. Sus predicciones sobre async/await, los módulos ES, e incluso detalles específicos de frameworks como React y Vue eran increíblemente precisos, como si hubiera viajado en el tiempo.');

INSERT INTO comments (post_id, author, content, date) VALUES
('desarrollo-web-post0', 'ArqueroTech', 'He comparado sus notas con las especificaciones actuales. La similitud es del 98.7%. Estadísticamente imposible por coincidencia.', '2023-09-06'),
('desarrollo-web-post0', 'DesarrolladorVeterano', 'Recuerdo estar en esa clase y pensar que sus ideas eran demasiado avanzadas para ser prácticas. Diez años después, me siento humilde al ver que cada detalle se hizo realidad.', '2023-09-07'),
('desarrollo-web-post0', 'ContributorGitHub', 'Lo más impresionante es que algunos contribuyentes principales de estos lenguajes fueron sus estudiantes. Su influencia en la evolución web ha sido silenciosa pero profunda.', '2023-09-08'),
('desarrollo-web-post0', 'AnalistaPatentes', 'Si hubiera patentado estas ideas cuando las concibió, sería dueño de prácticamente toda la infraestructura web moderna. Eligió compartirlas libremente.', '2023-09-09'),
('desarrollo-web-post0', 'EstudianteActual', '¿Alguien puede compartir copias de esas notas? Tengo curiosidad por ver qué más predijo que aún no se ha implementado.', '2023-09-10'),
('desarrollo-web-post0', 'SeñorTC39', 'Como miembro del comité TC39, puedo decir que muchos conceptos que estamos considerando para futuras versiones de ECMAScript tienen un parecido sorprendente con ideas que el profesor Bolio mencionó casualmente hace años.', '2023-09-11');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('desarrollo-web-post1', 'desarrollo-web', 'La clase que cambió mi carrera profesional', 'DesarrolladorAgradecido', '2023-11-05', 'Nunca olvidaré la clase de Desarrollo Web III con el profesor Bolio. Su forma de explicar conceptos complejos con ejemplos prácticos y relevantes transformó completamente mi comprensión del desarrollo web. Hoy trabajo en una empresa líder gracias a lo que aprendí con él.');

INSERT INTO comments (post_id, author, content, date) VALUES
('desarrollo-web-post1', 'CompañeroClase', '¿Recuerdas cuando nos enseñó a optimizar el rendimiento con esas técnicas que ni siquiera estaban en la documentación oficial? ¡Eso fue magia pura!', '2023-11-06'),
('desarrollo-web-post1', 'ReclutadorTech', 'Cuando veo ''Estudiante del profesor Bolio'' en un CV, automáticamente paso al candidato a la siguiente fase. Su formación es garantía de calidad.', '2023-11-07');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('desarrollo-web-post2', 'desarrollo-web', 'Sus exámenes: desafiantes pero justos', 'EstudiantePerseverante', '2023-11-30', 'Los exámenes del profesor Bolio son legendarios por su dificultad, pero también por ser increíblemente justos y relevantes. No evalúa memorización, sino comprensión profunda y aplicación práctica. Prepararse para su examen me hizo mejor desarrollador.');

INSERT INTO comments (post_id, author, content, date) VALUES
('desarrollo-web-post2', 'GraduadoReciente', 'Su famoso examen final donde había que construir una aplicación completa en 4 horas fue la experiencia más estresante y educativa de mi vida académica.', '2023-12-01'),
('desarrollo-web-post2', 'MentorTécnico', 'Uso los exámenes antiguos del profesor Bolio para entrenar a mi equipo de desarrollo. Son perfectos para identificar áreas de mejora.', '2023-12-02'),
('desarrollo-web-post2', 'EstudianteActual', 'Estoy en su clase ahora y estoy aterrorizado por el examen final. ¿Algún consejo de supervivencia?', '2023-12-03');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('desarrollo-web-post3', 'desarrollo-web', 'Sus predicciones tecnológicas siempre aciertan', 'ObservadorTecnológico', '2024-01-05', 'Lo más impresionante de las clases del profesor Bolio es cómo predice tendencias tecnológicas con años de anticipación. En 2018 ya nos hablaba de tecnologías que apenas están volviéndose mainstream ahora. Tomar notas en su clase es como tener una ventana al futuro de la industria.');

INSERT INTO comments (post_id, author, content, date) VALUES
('desarrollo-web-post3', 'InversorTech', 'He basado algunas inversiones en tecnologías que él mencionó en sus clases y han resultado extremadamente rentables.', '2024-01-06'),
('desarrollo-web-post3', 'DesarrolladorVisionario', 'Gracias a sus predicciones, me especialicé en áreas que años después se volvieron altamente demandadas. Le debo mi carrera.', '2024-01-07'),
('desarrollo-web-post3', 'CuriosoEscéptico', '¿Alguien tiene una lista de sus predicciones actuales? Me interesa saber en qué debería enfocarme para los próximos años.', '2024-01-08');

-- Posts for "Nuevas Tecnologías de la Información"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('nuevas-tecnologias-post1', 'nuevas-tecnologias', 'El día que nos mostró tecnología experimental', 'TestigoTecnológico', '2023-11-08', 'En una clase memorable, el profesor Bolio trajo un prototipo de una tecnología en la que estaba trabajando con un grupo de investigación. Era un sistema de realidad aumentada tan avanzado que parecía sacado de una película de ciencia ficción. Todos quedamos boquiabiertos.');

INSERT INTO comments (post_id, author, content, date) VALUES
('nuevas-tecnologias-post1', 'EscépticoConverso', 'Yo era de los que pensaban que exageraban sobre sus clases hasta que presencié esa demostración. Cambió mi perspectiva para siempre.', '2023-11-09'),
('nuevas-tecnologias-post1', 'InvestigadorPrivacidad', 'Lo más impresionante fue cómo incorporó consideraciones éticas profundas en la tecnología. No solo era avanzada, sino que estaba diseñada para proteger la privacidad y la autonomía del usuario.', '2023-11-10'),
('nuevas-tecnologias-post1', 'DirectorInnovación', 'Tres startups han surgido solo intentando recrear aspectos específicos de ese prototipo. Una de ellas acaba de alcanzar status de unicornio con una valoración de mil millones.', '2023-11-11'),
('nuevas-tecnologias-post1', 'EstudianteInspirado', 'Esa demostración fue lo que me convenció de especializarme en realidad aumentada. El profesor Bolio no solo muestra tecnología, inspira vocaciones.', '2023-11-12'),
('nuevas-tecnologias-post1', 'DiseñadorUX', 'Lo que más me impresionó fue la interfaz. Tan intuitiva que mi abuela podría usarla sin instrucciones, pero tan potente que un experto podría aprovecharla al máximo.', '2023-11-13'),
('nuevas-tecnologias-post1', 'IngenieroCurioso', '¿Alguien sabe si esa tecnología llegó a comercializarse? Me encantaría probarla.', '2023-11-10');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('nuevas-tecnologias-post2', 'nuevas-tecnologias', 'Sus conexiones con Silicon Valley', 'InvestigadorTech', '2023-12-05', 'Un aspecto fascinante de sus clases de Nuevas Tecnologías son las videoconferencias sorpresa con líderes tecnológicos de Silicon Valley. Aparentemente, el profesor Bolio tiene conexiones con los fundadores de las principales empresas tecnológicas del mundo.');

INSERT INTO comments (post_id, author, content, date) VALUES
('nuevas-tecnologias-post2', 'EstudianteAfortunado', 'Cuando el CEO de [empresa importante] se unió a nuestra clase para responder preguntas, casi me desmayo. Esas experiencias son invaluables.', '2023-12-06'),
('nuevas-tecnologias-post2', 'NetworkingProfesional', 'Un compañero consiguió una pasantía en [empresa importante] gracias a una de esas conexiones. El profesor realmente se preocupa por abrirnos puertas.', '2023-12-07'),
('nuevas-tecnologias-post2', 'AspiranteEmprendedor', 'Su red de contactos es legendaria. Dicen que puede conseguir una reunión con cualquier líder tecnológico con una simple llamada.', '2023-12-08');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('nuevas-tecnologias-post3', 'nuevas-tecnologias', 'El proyecto final que se convirtió en startup', 'EmprendedorInspiracional', '2024-01-10', 'Mi equipo desarrolló un proyecto final para su clase que el profesor Bolio consideró tan prometedor que nos puso en contacto con inversores. Hoy, tres años después, nuestra startup está valorada en millones y todo comenzó como una tarea para su clase.');

INSERT INTO comments (post_id, author, content, date) VALUES
('nuevas-tecnologias-post3', 'InversorÁngel', 'He financiado dos proyectos que salieron de sus clases. Su criterio para identificar potencial es impecable.', '2024-01-11'),
('nuevas-tecnologias-post3', 'EstudianteAmbicioso', 'Esto me motiva a esforzarme al máximo en mi proyecto final. ¿Quién sabe qué puertas puede abrir?', '2024-01-12'),
('nuevas-tecnologias-post3', 'AnalistaDeMercado', 'He seguido varias startups que nacieron en sus clases y tienen tasas de éxito muy por encima del promedio de la industria.', '2024-01-13');

-- Posts for "Seguridad de Software"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('seguridad-software-post0', 'seguridad-software', 'El día que evitó un ciberataque global en clase', 'TestigoDigital', '2023-10-05', 'Durante una clase normal de Seguridad de Software, el profesor Bolio interrumpió súbitamente su explicación, pidió prestado el portátil de un estudiante, y comenzó a teclear a una velocidad sobrehumana. Más tarde supimos que había detectado en tiempo real los primeros indicios de un ciberataque masivo y lo neutralizó completamente mientras seguía explicando conceptos de seguridad a la clase.');

INSERT INTO comments (post_id, author, content, date) VALUES
('seguridad-software-post0', 'EstudiantePresente', 'Estuve allí. Lo más impresionante fue que no perdió el hilo de su explicación mientras sus dedos volaban sobre el teclado. Seguía respondiendo preguntas como si nada extraordinario estuviera ocurriendo.', '2023-10-06'),
('seguridad-software-post0', 'ExpertoSeguridad', 'He analizado los registros de ese incidente. Neutralizó un ataque de día cero que habría comprometido sistemas críticos globales. Los mejores equipos de ciberseguridad del mundo tardaron horas en siquiera detectarlo.', '2023-10-07'),
('seguridad-software-post0', 'AgenciaGubernamental', 'No puedo entrar en detalles, pero recibió un reconocimiento secreto al más alto nivel por sus acciones ese día. Salvó literalmente billones de dólares y protegió infraestructura crítica.', '2023-10-08'),
('seguridad-software-post0', 'PeriodistaTecnológico', 'Los medios nunca informaron sobre esto debido al riesgo de pánico, pero fuentes confiables confirman que fue uno de los ataques más sofisticados jamás vistos.', '2023-10-09'),
('seguridad-software-post0', 'HackerÉtico', 'La comunidad de seguridad todavía habla de este incidente. El contraataque que implementó era tan elegante que parecía arte. Pura poesía en código.', '2023-10-10'),
('seguridad-software-post0', 'EstudianteInspiracional', 'Ese día decidí especializarme en ciberseguridad. El profesor Bolio no solo enseña la materia, encarna lo que significa ser un verdadero guardián digital.', '2023-10-11');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('seguridad-software-post1', 'seguridad-software', 'El hackeo ético en vivo que nos dejó sin palabras', 'AspiranteHacker', '2023-11-12', 'En su primera clase de Seguridad de Software, el profesor Bolio realizó una demostración de hackeo ético en vivo que dejó a todos atónitos. En menos de 5 minutos, demostró vulnerabilidades en sistemas que creíamos seguros y nos enseñó la importancia de la seguridad desde el diseño.');

INSERT INTO comments (post_id, author, content, date) VALUES
('seguridad-software-post1', 'DesarrolladorParanoico', 'Después de esa clase, reescribí completamente el sistema de autenticación de mi proyecto personal. Era un colador de seguridad.', '2023-11-13'),
('seguridad-software-post1', 'ExpertoSeguridad', 'Sus técnicas de demostración son brillantes porque ilustran vulnerabilidades complejas de manera comprensible para todos los niveles.', '2023-11-14');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('seguridad-software-post2', 'seguridad-software', 'Cuando encontramos una vulnerabilidad real', 'HackerÉticoNovato', '2023-12-10', 'Durante un ejercicio práctico en su clase, mi equipo descubrió accidentalmente una vulnerabilidad en un servicio web real. El profesor Bolio inmediatamente detuvo la clase, nos guió para documentar adecuadamente el hallazgo y nos ayudó a reportarlo responsablemente. Incluso recibimos una recompensa por ello.');

INSERT INTO comments (post_id, author, content, date) VALUES
('seguridad-software-post2', 'CompañeroClase', 'Recuerdo ese día. La calma y profesionalismo con que manejó la situación fue impresionante. Una lección invaluable sobre divulgación responsable.', '2023-12-11'),
('seguridad-software-post2', 'ProfesionalCiberseguridad', 'Esa experiencia práctica vale más que cientos de horas de teoría. Es lo que diferencia a un buen profesional de seguridad.', '2023-12-12'),
('seguridad-software-post2', 'ReclutadorSeguridad', 'Experiencias como esa en tu CV son oro puro para los reclutadores en ciberseguridad. Muestran habilidades reales y ética profesional.', '2023-12-13');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('seguridad-software-post3', 'seguridad-software', 'Sus anécdotas de consultoría en seguridad', 'EstudianteAtento', '2024-01-15', 'Lo mejor de sus clases son las anécdotas (anonimizadas) sobre sus trabajos de consultoría en seguridad para grandes empresas y gobiernos. Esos casos de estudio reales proporcionan conocimientos que no se encuentran en ningún libro de texto.');

INSERT INTO comments (post_id, author, content, date) VALUES
('seguridad-software-post3', 'AuditorSeguridad', 'Sus anécdotas sobre auditorías de seguridad física me ayudaron a identificar vulnerabilidades que ningún curso formal había cubierto.', '2024-01-16'),
('seguridad-software-post3', 'GrabadorClases', 'Alguien debería compilar todas sus anécdotas en un libro. Serían lecciones invaluables para profesionales de seguridad en todo el mundo.', '2024-01-17'),
('seguridad-software-post3', 'IngenieroCurioso', '¿Recuerdan cuando contó sobre aquella empresa que tenía contraseñas pegadas bajo los teclados? Una lección sobre cómo la seguridad más sofisticada puede ser derrotada por malas prácticas básicas.', '2024-01-18');

-- Posts for "Su dominio sobre el tiempo"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('tiempo-post1', 'tiempo', '¿Cómo puede estar en dos lugares a la vez?', 'InvestigadorTemporal', '2024-02-10', 'Varios estudiantes han reportado haber visto al profesor Bolio en dos ubicaciones diferentes exactamente al mismo tiempo. Un día, estaba dando clase en el Edificio A mientras simultáneamente atendía una reunión importante en el Edificio B. Las evidencias fotográficas con marca de tiempo verificada parecen confirmarlo.');

INSERT INTO comments (post_id, author, content, date) VALUES
('tiempo-post1', 'FísicoTeórico', 'Según la teoría de cuerdas, podría estar manipulando dimensiones adicionales de espacio-tiempo para crear lo que parece ser bilocación desde nuestra perspectiva limitada de 4 dimensiones.', '2024-02-11'),
('tiempo-post1', 'EstudianteConfundido', 'Una vez le pregunté sobre esto y me sonrió diciendo: ''El tiempo es solo una percepción limitada de una realidad más compleja''. Aún intento entender qué significa.', '2024-02-12'),
('tiempo-post1', 'InvestigadorCuántico', 'Podría estar aprovechando principios de entrelazamiento cuántico macroscópico que la ciencia actual considera teóricamente posibles pero prácticamente inalcanzables.', '2024-02-13'),
('tiempo-post1', 'FilósofoTemporal', 'La pregunta no es cómo puede estar en dos lugares a la vez, sino cómo el resto de nosotros estamos limitados a uno solo. Quizás él simplemente ha superado las restricciones que aceptamos como normales.', '2024-02-14');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('tiempo-post2', 'tiempo', 'Su agenda imposible y la dilatación temporal', 'GestorTiempoExperto', '2024-02-15', 'He analizado la agenda del profesor Bolio durante un semestre. Considerando el tiempo de desplazamiento entre ubicaciones y la duración de sus compromisos, necesitaría aproximadamente 36 horas por día para completar todas sus actividades. Sin embargo, lo logra consistentemente sin mostrar signos de fatiga o prisa.');

INSERT INTO comments (post_id, author, content, date) VALUES
('tiempo-post2', 'CronobiólogoExperto', 'He monitorizado discretamente sus patrones de sueño. Aparentemente solo duerme 12 minutos por noche, en dos intervalos de 6 minutos que coinciden con los ciclos lunares.', '2024-02-16'),
('tiempo-post2', 'IngenieroProcesos', 'Quizás ha optimizado cada microsegundo de su día con un algoritmo de eficiencia temporal que supera cualquier sistema de productividad conocido.', '2024-02-17'),
('tiempo-post2', 'EstudianteObservador', '¿Han notado que nunca parece apurado? Mientras todos corremos entre clases, él camina tranquilamente y aun así siempre llega antes que todos. Es como si tuviera su propio flujo temporal.', '2024-02-18'),
('tiempo-post2', 'FísicoRelatividadGeneral', 'La teoría de la relatividad permite la dilatación temporal. Quizás ha encontrado una forma de manipular su campo gravitacional personal para alterar su experiencia del tiempo relativo al resto del universo.', '2024-02-19'),
('tiempo-post2', 'NeurocientistaPercepción', 'Otra posibilidad es que ha maximizado la eficiencia de sus conexiones neuronales, permitiéndole procesar información a velocidades sobrehumanas, creando la ilusión de tener más tiempo.', '2024-02-20');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('tiempo-post3', 'tiempo', 'Predicciones que siempre se cumplen', 'AnalíticaFuturo', '2024-02-21', 'El profesor Bolio tiene un historial escalofriante de precisión en sus predicciones, desde avances tecnológicos hasta eventos globales y resultados deportivos. Su precisión supera cualquier modelo estadístico o análisis predictivo existente. ¿Podría estar percibiendo el futuro o incluso influyendo en él?');

INSERT INTO comments (post_id, author, content, date) VALUES
('tiempo-post3', 'EstadísticoEscéptico', 'He calculado la probabilidad de acertar tantas predicciones por casualidad. Los números son astronómicamente improbables: 1 en 10^23, aproximadamente la cantidad de estrellas en el universo observable.', '2024-02-22'),
('tiempo-post3', 'FísicoCausalidad', 'La física cuántica permite, teóricamente, que la información viaje hacia atrás en el tiempo bajo ciertas condiciones extremas. Quizás ha encontrado una forma de acceder a esos canales informativos.', '2024-02-23'),
('tiempo-post3', 'EstudianteGanador', 'Seguí su consejo casual sobre ''un interesante evento deportivo este fin de semana'' y aposté todos mis ahorros. Ahora no tengo que preocuparme por el préstamo estudiantil.', '2024-02-24'),
('tiempo-post3', 'InvestigadorPatrones', 'Quizás no ve el futuro directamente, sino que su capacidad para procesar variables y detectar patrones es tan avanzada que puede predecir resultados con precisión extrema, como un superordenador cuántico humano.', '2024-02-25'),
('tiempo-post3', 'FilósofoExistencial', 'La pregunta más profunda sería: si realmente puede ver el futuro, ¿está observando un futuro predeterminado o creando uno nuevo con cada observación?', '2024-02-26');

-- Posts for "Sus habilidades mentales extraordinarias"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('mente-post1', 'mente', 'Su memoria fotográfica perfecta', 'NeurocientíficoCognitivo', '2024-02-27', 'El profesor Bolio posee una memoria eidética (fotográfica) perfecta, sin las limitaciones típicas de esta condición. Puede recordar con precisión absoluta todo lo que ha visto o experimentado, incluyendo páginas enteras de libros leídos décadas atrás, conversaciones palabra por palabra, y cada rostro que ha visto en su vida.');

INSERT INTO comments (post_id, author, content, date) VALUES
('mente-post1', 'EstudianteAsombrado', 'Una vez, en medio de una conferencia, citó textualmente un pasaje oscuro de un libro que leyó hace 30 años cuando el autor del libro estaba presente. El autor quedó atónito porque ni él mismo recordaba haberlo escrito.', '2024-02-28'),
('mente-post1', 'InvestigadorMemoria', 'Las personas con memoria eidética típicamente tienen limitaciones o efectos secundarios negativos. El profesor parece haber superado esas limitaciones, sugiriendo una arquitectura neuronal única.', '2024-02-29'),
('mente-post1', 'EstudianteTravieso', 'Intenté entregarle un trabajo con dos párrafos idénticos separados por 20 páginas para ver si lo notaría. Me devolvió el trabajo con una nota: ''Interesante experimento. La repetición está en las páginas 4 y 24, párrafo 2.''', '2024-03-01'),
('mente-post1', 'PsicólogoClínico', 'Lo más impresionante es que esta memoria extraordinaria no parece causarle angustia emocional como suele ocurrir con casos similares. Ha desarrollado mecanismos para gestionar un volumen de recuerdos que abrumaría a la persona promedio.', '2024-03-02');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('mente-post2', 'mente', 'Su capacidad de aprender cualquier idioma en horas', 'LingüistaInvestigador', '2024-03-03', 'Según múltiples testimonios, el profesor Bolio puede aprender un nuevo idioma hasta nivel de fluidez nativa en cuestión de horas. Esta habilidad desafía todo lo que sabemos sobre adquisición de lenguaje y plasticidad cerebral. Aparentemente habla más de 50 idiomas con acento y modismos perfectos.');

INSERT INTO comments (post_id, author, content, date) VALUES
('mente-post2', 'TraductorProfesional', 'Estuve presente cuando un diplomático mongol visitó la universidad sin traductor. El profesor Bolio se excusó durante 30 minutos y regresó manteniendo una conversación fluida en mongol, incluyendo referencias a poesía antigua que impresionaron al visitante.', '2024-03-04'),
('mente-post2', 'NeurologistaLenguaje', 'Su cerebro debe tener una configuración única en la región de Broca y Wernicke, posiblemente con conexiones neuronales adicionales que le permiten procesar y reproducir patrones lingüísticos a velocidades sobrehumanas.', '2024-03-05'),
('mente-post2', 'EstudianteInternacional', 'Cuando llegué de intercambio sin hablar español, me saludó perfectamente en mi idioma nativo (un dialecto muy poco común). Cuando mostré sorpresa, simplemente dijo: ''Me pareció cortés aprender algo nuevo esta mañana''.', '2024-03-06'),
('mente-post2', 'AntigüistaLingüístico', 'También domina lenguas muertas como el sumerio, el etrusco y variantes extintas del sánscrito. Ha ayudado a descifrar textos que habían confundido a generaciones de especialistas.', '2024-03-07'),
('mente-post2', 'CientíficoCognitivo', 'La teoría más plausible es que ha desarrollado un meta-marco lingüístico que le permite identificar instantáneamente los patrones estructurales de cualquier lengua y mapearlos a conceptos universales.', '2024-03-08');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('mente-post3', 'mente', 'Su capacidad para leer pensamientos... ¿o es solo observación avanzada?', 'PsicólogoEscéptico', '2024-03-09', 'Numerosos estudiantes y colegas han reportado experiencias donde el profesor Bolio parece responder a pensamientos no expresados o anticipar preguntas antes de que sean formuladas. Aunque el escepticismo científico sugeriría una capacidad extraordinaria de lectura de microexpresiones y lenguaje corporal, los testimonios consistentes plantean interrogantes fascinantes.');

INSERT INTO comments (post_id, author, content, date) VALUES
('mente-post3', 'EstudiantePerplejo', 'Estaba luchando con un concepto en clase pero tenía demasiado miedo para preguntar. De repente, interrumpió su explicación y abordó exactamente mi duda, mirándome directamente aunque yo estaba en la última fila.', '2024-03-10'),
('mente-post3', 'NeurocientíficoTeórico', 'Estudios recientes sobre campos electromagnéticos cerebrales sugieren la posibilidad teórica de detectar patrones de pensamiento a distancia con la sensibilidad adecuada. Podría estar percibiendo señales que otros no pueden detectar.', '2024-03-11'),
('mente-post3', 'ComportamientalAnalista', 'La explicación más científica sería una capacidad de observación llevada al extremo, combinada con inteligencia emocional y deductiva excepcional, creando la ilusión de telepatía cuando realmente es una forma avanzada de empatía cognitiva.', '2024-03-12'),
('mente-post3', 'ProfesoraFilosofía', 'Le pregunté directamente sobre esto una vez. Sonrió y dijo: ''Todos transmitimos más de lo que creemos. Solo hay que aprender a escuchar con más que los oídos''. Profundo y enigmático, como siempre.', '2024-03-13');
-- Continuing with comments for 'mente-post3'
INSERT INTO comments (post_id, author, content, date) VALUES
('mente-post3', 'EstudianteConvencido', 'Escépticos, expliquen esto: pensé en una secuencia numérica completamente aleatoria durante un examen, y al entregar mi hoja, me susurró exactamente los mismos números al oído. No había forma de que pudiera saberlo.', '2024-03-14'),
('mente-post3', 'FísicoCuánticoTeórico', 'La física cuántica sugiere que las partículas entrelazadas comparten información instantáneamente. Si nuestros cerebros operan parcialmente a nivel cuántico, como sugieren algunas teorías, podría haber un fundamento para este fenómeno.', '2024-03-15');

-- Posts for "Fenómenos inexplicables en su presencia"
INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('inexplicables-post1', 'inexplicables', 'Equipos electrónicos que funcionan sin batería', 'IngenieroPerplejidad', '2024-03-16', 'Varios testigos han reportado que dispositivos electrónicos con baterías completamente agotadas vuelven a funcionar temporalmente cuando el profesor Bolio los toca o simplemente está cerca de ellos. Este fenómeno desafía los principios fundamentales de la conservación de energía y electromagnetismo.');

INSERT INTO comments (post_id, author, content, date) VALUES
('inexplicables-post1', 'EstudianteDesesperado', 'Mi laptop se apagó en medio de un examen porque olvidé cargarla. El profesor pasó junto a mi mesa, la tocó casualmente, y volvió a encenderse con un 30% de batería. Pude terminar mi examen.', '2024-03-17'),
('inexplicables-post1', 'FísicoEnergía', 'Podría estar generando un campo electromagnético altamente específico y controlado, induciendo corriente en los circuitos de carga de los dispositivos. Teóricamente posible, pero requeriría un control fisiológico sin precedentes.', '2024-03-18'),
('inexplicables-post1', 'IngenieroEscéptico', 'He intentado documentar este fenómeno con equipos de medición, pero curiosamente, las cámaras y sensores tienden a fallar cuando intento registrarlo. Casi como si el fenómeno evitara ser documentado.', '2024-03-19'),
('inexplicables-post1', 'BiofísicoTeórico', 'El cuerpo humano genera electricidad, pero no en cantidades remotamente suficientes para este efecto. Debe estar canalizando o transformando energía de alguna fuente no convencional.', '2024-03-20'),
('inexplicables-post1', 'EstudianteAgradecido', 'No sé cómo funciona, pero desde que el profesor Bolio tocó mi teléfono viejo, la batería dura tres días más que antes. El efecto parece ser permanente en mi caso.', '2024-03-21');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('inexplicables-post2', 'inexplicables', 'Plantas que crecen más rápido en su presencia', 'BotánicoAsombrado', '2024-03-22', 'Como parte de un experimento controlado, he documentado que las plantas en presencia del profesor Bolio crecen aproximadamente un 320% más rápido que sus contrapartes en condiciones idénticas. Además, desarrollan propiedades inusuales como mayor resistencia a enfermedades y adaptabilidad a entornos hostiles.');

INSERT INTO comments (post_id, author, content, date) VALUES
('inexplicables-post2', 'BioquímicoVegetal', 'He analizado muestras de estas plantas. Muestran modificaciones en su estructura celular y expresión genética que normalmente requerirían generaciones de evolución selectiva.', '2024-03-23'),
('inexplicables-post2', 'JardineroUniversidad', 'El jardín frente a su oficina florece todo el año, incluso durante heladas severas. Y las plantas nunca parecen necesitar agua adicional, como si optimizaran su metabolismo.', '2024-03-24'),
('inexplicables-post2', 'AgrónomoInvestigador', 'Si pudiéramos entender y replicar este efecto, revolucionaríamos la agricultura global y podríamos abordar problemas de seguridad alimentaria en regiones áridas.', '2024-03-25'),
('inexplicables-post2', 'BiofísicoAmbiental', 'Teoría: podría estar alterando sutilmente el campo electromagnético local, estimulando los procesos bioelectroquímicos de las plantas de una manera análoga a técnicas avanzadas de agricultura.', '2024-03-26'),
('inexplicables-post2', 'EstudianteBotánica', 'Le regalé una planta que los expertos consideraban imposible de cultivar en nuestro clima. No solo sobrevivió, sino que floreció y desarrolló propiedades medicinales que no están documentadas en la literatura científica.', '2024-03-27');

INSERT INTO posts (id, subtopic_id, title, author, date, content) VALUES
('inexplicables-post3', 'inexplicables', 'Meteorología localizada: nunca se moja con la lluvia', 'MeteorólogoPerplejo', '2024-03-28', 'Múltiples observaciones confirman un fenómeno meteorológico inexplicable: el profesor Bolio nunca se moja cuando llueve, incluso caminando por tormentas intensas sin paraguas. No es que el agua rebote en él; parece más bien que las gotas alteran su trayectoria para evitarlo, creando un espacio seco a su alrededor.');

INSERT INTO comments (post_id, author, content, date) VALUES
('inexplicables-post3', 'FísicoDinámicaFluidos', 'He grabado este fenómeno con cámara de alta velocidad. Las gotas de lluvia efectivamente cambian su vector de caída cuando se acercan a aproximadamente 15 cm de su cuerpo, violando leyes básicas de la dinámica de fluidos.', '2024-03-29'),
('inexplicables-post3', 'EstudianteMojado', 'Caminé junto a él durante un aguacero repentino. Terminé empapado mientras él llegó perfectamente seco al aula. Ni siquiera los zapatos estaban húmedos.', '2024-03-30'),
('inexplicables-post3', 'InvestigadorCampoUnificado', 'Podría estar generando inconscientemente un campo de fuerza microscópica: no suficientemente fuerte para afectar objetos sólidos, pero suficiente para desviar moléculas de agua.', '2024-03-31'),
('inexplicables-post3', 'TermodinámicaExperto', 'Otra posibilidad es la manipulación localizada de gradientes de temperatura, creando corrientes ascendentes invisibles que evaporan el agua antes del contacto.', '2024-04-01'),
('inexplicables-post3', 'ExEstudianteOportuno', 'Durante una graduación al aire libre, una tormenta amenazaba con arruinar la ceremonia. Curiosamente, mientras él daba su discurso, la lluvia cayó intensamente alrededor del campo, formando casi un círculo perfecto de sequedad sobre todos nosotros.', '2024-04-02');

-- Add some indexes to improve query performance
CREATE INDEX idx_subtopics_topic_id ON subtopics(topic_id);
CREATE INDEX idx_posts_subtopic_id ON posts(subtopic_id);
CREATE INDEX idx_comments_post_id ON comments(post_id);
CREATE INDEX idx_posts_date ON posts(date);
CREATE INDEX idx_comments_date ON comments(date);

-- Create stored procedures for common operations

-- Procedure to get latest posts
DELIMITER //
CREATE PROCEDURE GetLatestPosts(IN limit_count INT)
BEGIN
    SELECT p.*, s.title as subtopic_title, t.title as topic_title, 
           (SELECT COUNT(*) FROM comments WHERE post_id = p.id) as comment_count
    FROM posts p
    JOIN subtopics s ON p.subtopic_id = s.id
    JOIN topics t ON s.topic_id = t.id
    ORDER BY p.date DESC
    LIMIT limit_count;
END //
DELIMITER ;

-- Procedure to get post details with comments
DELIMITER //
CREATE PROCEDURE GetPostWithComments(IN post_identifier VARCHAR(50))
BEGIN
    SELECT p.*, s.title as subtopic_title, t.id as topic_id, t.title as topic_title
    FROM posts p
    JOIN subtopics s ON p.subtopic_id = s.id
    JOIN topics t ON s.topic_id = t.id
    WHERE p.id = post_identifier;
    
    SELECT * FROM comments 
    WHERE post_id = post_identifier
    ORDER BY date ASC;
END //
DELIMITER ;

-- Procedure to get subtopic statistics
DELIMITER //
CREATE PROCEDURE GetSubtopicStats(IN subtopic_identifier VARCHAR(50))
BEGIN
    SELECT 
        s.id, 
        s.title, 
        t.id as topic_id,
        t.title as topic_title,
        COUNT(DISTINCT p.id) as post_count,
        COUNT(DISTINCT c.id) as comment_count,
        MAX(p.date) as latest_post_date
    FROM 
        subtopics s
        JOIN topics t ON s.topic_id = t.id
        LEFT JOIN posts p ON s.id = p.subtopic_id
        LEFT JOIN comments c ON p.id = c.post_id
    WHERE 
        s.id = subtopic_identifier
    GROUP BY 
        s.id, s.title, t.id, t.title;
END //
DELIMITER ;

-- Create a view for forum statistics
CREATE VIEW forum_statistics AS
SELECT 
    (SELECT COUNT(*) FROM topics) as topic_count,
    (SELECT COUNT(*) FROM subtopics) as subtopic_count,
    (SELECT COUNT(*) FROM posts) as post_count,
    (SELECT COUNT(*) FROM comments) as comment_count,
    (SELECT COUNT(DISTINCT author) FROM posts) as unique_post_authors,
    (SELECT COUNT(DISTINCT author) FROM comments) as unique_comment_authors,
    (SELECT MAX(date) FROM posts) as latest_post_date;

-- Create a database user with restricted permissions for the application
CREATE USER IF NOT EXISTS 'bolioforo_app'@'%' IDENTIFIED BY 'app_password';
GRANT SELECT, INSERT, UPDATE ON bolioforo.* TO 'bolioforo_app'@'%';
FLUSH PRIVILEGES;
