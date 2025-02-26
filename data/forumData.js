const forumData = [
    {
      id: "los-hobbies",
      title: "Los hobbies del profesor Bolio",
      subtopics: [
        {
          id: "deportes",
          title: "Los deportes que practica el profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "Su rutina de entrenamiento olímpico",
              author: "EntrenadorAdmirador",
              date: "2024-01-20",
              content: "Como entrenador personal, debo decir que la rutina de entrenamiento del profesor Bolio es simplemente extraordinaria. Se levanta a las 4 AM para nadar 5 km, luego corre 15 km, y termina con 2 horas de entrenamiento con pesas. Todo esto antes de llegar a dar clase a las 8 AM, completamente fresco y sin una gota de sudor.",
              comments: [
                {
                  author: "AtletaAficionado",
                  content: "Le pregunté una vez sobre su resistencia excepcional y me dijo que simplemente tiene 'buena genética'. ¡Qué modesto!",
                  date: "2024-01-21"
                },
                {
                  author: "EstudianteIncrédulo",
                  content: "¿Y cómo es que nunca lo vemos cansado después de semejante rutina? Sus clases de las 8 AM son las más energéticas.",
                  date: "2024-01-22"
                },
                {
                  author: "NutricionistaExperto",
                  content: "Su dieta balanceada, rica en proteínas y antioxidantes, es clave para mantener ese nivel de energía constante.",
                  date: "2024-01-23"
                },
                {
                  author: "ProfesionalFitness",
                  content: "Lo he visto en el gimnasio levantando pesos que harían temblar a culturistas profesionales, y lo hace con una forma perfecta.",
                  date: "2024-01-24"
                }
              ]
            },
            {
              id: "post2",
              title: "Medallista de oro en competiciones secretas",
              author: "PeriodistDeportivo",
              date: "2024-01-25",
              content: "Fuentes confiables me han informado que el profesor Bolio ha participado en competiciones de triatlón bajo seudónimo para no llamar demasiado la atención. Ha ganado múltiples medallas de oro, pero prefiere mantener un perfil bajo para no intimidar a sus colegas.",
              comments: [
                {
                  author: "EspectadorAfortunado",
                  content: "Creo que lo vi en la última Ironman. Terminó dos horas antes que el segundo lugar, pero desapareció antes de la ceremonia de premiación.",
                  date: "2024-01-26"
                },
                {
                  author: "InvestigadorAficionado",
                  content: "He comparado fotos del misterioso 'Atleta X' que ha ganado las últimas 5 competiciones nacionales, y el parecido con el profesor es sorprendente.",
                  date: "2024-01-27"
                },
                {
                  author: "EntrenadorOlímpico",
                  content: "Le he ofrecido entrenar al equipo nacional, pero siempre dice que su verdadera pasión es la enseñanza. Un hombre de principios.",
                  date: "2024-01-28"
                }
              ]
            },
            {
              id: "post3",
              title: "Su técnica perfecta en cada deporte",
              author: "AnalistaTécnico",
              date: "2024-01-30",
              content: "Como analista deportivo, he estudiado la técnica del profesor Bolio en diversos deportes y es simplemente perfecta. Su swing de golf, su técnica de natación, su forma de correr... Todo sigue los principios biomecánicos ideales. Es como si hubiera nacido para el deporte.",
              comments: [
                {
                  author: "EntrenadorGolf",
                  content: "Una vez le di una clase de golf y terminé pidiéndole consejos a él. Su comprensión intuitiva de la física del swing es asombrosa.",
                  date: "2024-01-31"
                },
                {
                  author: "NadadorProfesional",
                  content: "Su técnica de natación es tan eficiente que apenas crea ondas en el agua. Es hipnotizante verlo nadar.",
                  date: "2024-02-01"
                },
                {
                  author: "BiomecánicoDeportivo",
                  content: "He analizado videos de su técnica de carrera y es el ejemplo perfecto que uso en mis conferencias. Eficiencia pura en movimiento.",
                  date: "2024-02-02"
                },
                {
                  author: "EstudianteAtleta",
                  content: "¿Alguien sabe si da clases particulares de deportes? Pagaría lo que fuera por mejorar mi técnica con su ayuda.",
                  date: "2024-02-03"
                },
                {
                  author: "MédicoDeportivo",
                  content: "Su perfecta biomecánica explica por qué nunca ha sufrido lesiones a pesar de su intenso régimen de entrenamiento. Un caso de estudio perfecto.",
                  date: "2024-02-04"
                }
              ]
            },
            {
              id: "post4",
              title: "Las montañas que ha conquistado",
              author: "AlpinistaAdmirador",
              date: "2024-02-05",
              content: "Pocos saben que el profesor Bolio es también un alpinista consumado. Ha conquistado los Siete Picos (las montañas más altas de cada continente) en tiempo récord, y lo hizo durante sus vacaciones de verano sin que nadie se enterara.",
              comments: [
                {
                  author: "GuíaMontaña",
                  content: "Lo vi en el Everest el verano pasado. Subió sin oxígeno suplementario y ayudó a rescatar a otros dos alpinistas en el camino.",
                  date: "2024-02-06"
                },
                {
                  author: "GeógrafoProfesional",
                  content: "Hay rumores de que ha descubierto nuevas rutas en montañas que se consideraban completamente exploradas.",
                  date: "2024-02-07"
                },
                {
                  author: "FotógrafoNaturaleza",
                  content: "Tengo una foto de alguien que se parece mucho a él en la cima del K2 durante una tormenta. La expresión es de total serenidad.",
                  date: "2024-02-08"
                }
              ]
            }
          ]
        },
        {
          id: "arte",
          title: "Las expresiones artísticas del profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "Sus pinturas secretas que valen millones",
              author: "CríticoArte",
              date: "2024-02-10",
              content: "He descubierto que el profesor Bolio pinta bajo un seudónimo obras que se venden por millones en galerías exclusivas. Su técnica combina el realismo clásico con toques de modernismo en una fusión nunca antes vista en el mundo del arte.",
              comments: [
                {
                  author: "ColeccionistaArte",
                  content: "Tengo una obra del misterioso 'Maestro B' en mi colección. Ahora entiendo por qué sentía una conexión intelectual tan profunda cada vez que la contemplaba.",
                  date: "2024-02-11"
                },
                {
                  author: "GaleristaExclusivo",
                  content: "Las obras del 'Maestro B' generan listas de espera de años. Ahora que sé quién es realmente, todo tiene sentido.",
                  date: "2024-02-12"
                },
                {
                  author: "HistoriadorArte",
                  content: "Su técnica tiene influencias de Da Vinci y Picasso, pero con un enfoque matemático que solo podría venir de una mente como la del profesor Bolio.",
                  date: "2024-02-13"
                }
              ]
            },
            {
              id: "post2",
              title: "Su virtuosismo musical en varios instrumentos",
              author: "MelómanoObservador",
              date: "2024-02-15",
              content: "Pocos saben que el profesor Bolio domina más de 10 instrumentos musicales a nivel de concertista. Toca el piano, violín, violonchelo, guitarra clásica, flauta traversa, saxofón, arpa, batería, bajo, trompeta y acordeón con una maestría que deja boquiabiertos a músicos profesionales.",
              comments: [
                {
                  author: "DirectorOrquesta",
                  content: "Le ofrecí el puesto de primer violín en mi orquesta, pero declinó amablemente diciendo que la enseñanza es su verdadera pasión.",
                  date: "2024-02-16"
                },
                {
                  author: "PianistaConcierto",
                  content: "Lo escuché tocar una pieza de Rachmaninoff que yo llevo años perfeccionando. La interpretó a primera vista con una sensibilidad que me dejó sin palabras.",
                  date: "2024-02-17"
                },
                {
                  author: "EstudianteMúsica",
                  content: "¿Es cierto que compone música en su tiempo libre? Me encantaría escuchar alguna de sus creaciones.",
                  date: "2024-02-18"
                },
                {
                  author: "TécnicoAcústica",
                  content: "Su comprensión de las matemáticas detrás de la música explica su dominio técnico. Entiende las ondas sonoras a un nivel que pocos músicos comprenden.",
                  date: "2024-02-19"
                }
              ]
            },
            {
              id: "post3",
              title: "El libro que está escribiendo",
              author: "EditorCurioso",
              date: "2024-02-20",
              content: "Tengo información de que el profesor Bolio está escribiendo una novela que combina ciencia ficción, filosofía y matemáticas avanzadas. Las editoriales más prestigiosas ya están en una guerra de ofertas por los derechos, aunque aún no ha terminado de escribirla.",
              comments: [
                {
                  author: "AgenteEditorial",
                  content: "Puedo confirmar esta información. Hemos ofrecido un adelanto sin precedentes solo por leer el primer capítulo.",
                  date: "2024-02-21"
                },
                {
                  author: "EscritorFamoso",
                  content: "He tenido el privilegio de leer un fragmento. Revolucionará la literatura como la conocemos y probablemente ganará el Premio Nobel.",
                  date: "2024-02-22"
                },
                {
                  author: "EstudianteLiteratura",
                  content: "¿Alguien sabe de qué trata exactamente? Estoy dispuesto a hacer cola desde ya para conseguir una copia firmada.",
                  date: "2024-02-23"
                },
                {
                  author: "CríticoLiterario",
                  content: "Un texto que combina narrativa brillante con conceptos matemáticos complejos solo podría venir de una mente como la del profesor Bolio.",
                  date: "2024-02-24"
                },
                {
                  author: "FilósofoContemporáneo",
                  content: "Las implicaciones filosóficas que plantea en su manuscrito podrían generar nuevas ramas de pensamiento. Una obra verdaderamente revolucionaria.",
                  date: "2024-02-25"
                }
              ]
            }
          ]
        },
        {
          id: "cocina",
          title: "Las habilidades culinarias del profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "Chef secreto de restaurante con estrella Michelin",
              author: "GourmetInformado",
              date: "2024-02-25",
              content: "Fuentes confiables me han informado que el misterioso chef consultor que ayudó a un restaurante local a conseguir su primera estrella Michelin no es otro que el profesor Bolio. Su enfoque matemático para balancear sabores y su comprensión de la química culinaria han revolucionado la cocina molecular.",
              comments: [
                {
                  author: "ChefProfesional",
                  content: "Tuve el honor de verlo cocinar una vez. Su precisión con el cuchillo y su comprensión intuitiva de las reacciones químicas en los alimentos son asombrosas.",
                  date: "2024-02-26"
                },
                {
                  author: "CríticoCulinario",
                  content: "El postre estrella del restaurante tiene un balance de sabores basado en la secuencia de Fibonacci. Ahora entiendo quién podría estar detrás de semejante maravilla.",
                  date: "2024-02-27"
                },
                {
                  author: "EstudianteGastronomía",
                  content: "¿Podríamos convencerlo para dar un seminario sobre física y química aplicada a la cocina? Pagaría lo que fuera por asistir.",
                  date: "2024-02-28"
                }
              ]
            },
            {
              id: "post2",
              title: "Su colección de especias de todo el mundo",
              author: "ExploradoCulinario",
              date: "2024-03-01",
              content: "He tenido el privilegio de ver la colección personal de especias del profesor Bolio. Tiene más de 500 especias raras de todos los rincones del mundo, algunas tan exclusivas que ni los chefs más renombrados tienen acceso a ellas. Las guarda en un sistema de almacenamiento con temperatura y humedad controladas por un algoritmo que él mismo diseñó.",
              comments: [
                {
                  author: "BotánicoGourmet",
                  content: "Me mostró una especia que creíamos extinta hace 200 años. Aparentemente la cultiva él mismo en condiciones específicas que replicó tras años de investigación.",
                  date: "2024-03-02"
                },
                {
                  author: "ImportadorEspecias",
                  content: "Ha descubierto combinaciones de especias que generan sabores completamente nuevos. Podría revolucionar la gastronomía mundial si decidiera compartir sus hallazgos.",
                  date: "2024-03-03"
                },
                {
                  author: "ChefInternacional",
                  content: "Su comprensión de cómo las moléculas de las diferentes especias interactúan entre sí es comparable a la de un científico especializado, pero con el paladar de un maestro catador.",
                  date: "2024-03-04"
                },
                {
                  author: "EstudianteQuímica",
                  content: "¿Es cierto que desarrolló un método para extraer los compuestos aromáticos de las especias con una eficiencia nunca antes vista?",
                  date: "2024-03-05"
                }
              ]
            },
            {
              id: "post3",
              title: "El postre que dejó sin palabras a un jurado internacional",
              author: "ReporteroGastronómico",
              date: "2024-03-06",
              content: "En un concurso internacional de repostería donde participó anónimamente, el profesor Bolio presentó un postre que combinaba técnicas de cocina molecular, presentación artística y sabores perfectamente equilibrados. El jurado, compuesto por los mejores chefs del mundo, le otorgó la puntuación perfecta por primera vez en la historia del concurso.",
              comments: [
                {
                  author: "JuradoConcurso",
                  content: "Estuve en ese panel de jueces. El postre tenía capas de sabor que se revelaban secuencialmente, como una sinfonía perfectamente orquestada. Nunca había experimentado algo así.",
                  date: "2024-03-07"
                },
                {
                  author: "ReposteroFamoso",
                  content: "He intentado replicar ese postre durante meses sin éxito. La precisión y balance de sabores parecen seguir algún tipo de fórmula matemática sublime.",
                  date: "2024-03-08"
                },
                {
                  author: "FotógrafoGastronomía",
                  content: "Tuve la suerte de fotografiar ese postre. La estructura geométrica perfecta y los colores eran tan hermosos que parecía una obra de arte. Mi foto ganó un premio internacional.",
                  date: "2024-03-09"
                },
                {
                  author: "CientíficoAlimentos",
                  content: "El método de cristalización que utilizó para una de las capas del postre ha generado tres papers científicos que intentan explicar cómo logró esa textura imposible.",
                  date: "2024-03-10"
                },
                {
                  author: "EstudianteCurioso",
                  content: "¿Existe alguna foto de este postre legendario? Me encantaría al menos poder verlo, ya que probarlo parece imposible.",
                  date: "2024-03-11"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "la-vida",
      title: "La vida del profesor Bolio",
      subtopics: [
        {
          id: "ninez",
          title: "La niñez del profesor Bolio",
          posts: [
            {
              id: "post0",
              title: "El día que nació y los hospitales colapsaron",
              author: "HistoriadorMédico",
              date: "2023-08-10",
              content: "El día que nació el profesor Bolio, se registraron fenómenos inexplicables en todos los hospitales de la ciudad. Las luces parpadearon, los equipos electrónicos mostraron lecturas fuera de escala, y se dice que todos los recién nacidos de ese día terminaron siendo genios en sus respectivos campos.",
              comments: [
                {
                  author: "EnfermeraTestigo",
                  content: "Estuve de guardia ese día. Recuerdo que justo en el momento de su nacimiento, todas las computadoras del hospital mostraron código binario por unos segundos. Los técnicos nunca pudieron explicarlo.",
                  date: "2023-08-11"
                },
                {
                  author: "AstrónomoProfesional",
                  content: "Curiosamente, esa noche se registró una alineación planetaria que solo ocurre cada 2,500 años. ¿Coincidencia? No lo creo.",
                  date: "2023-08-12"
                },
                {
                  author: "NeurocientíficoExperto",
                  content: "Los escáneres cerebrales que le realizaron al nacer mostraron actividad en regiones que normalmente no se desarrollan hasta los 5 años. Los médicos pensaron que el equipo estaba averiado.",
                  date: "2023-08-13"
                },
                {
                  author: "MatemáticoProbabilidad",
                  content: "He calculado las probabilidades de que todos estos eventos ocurrieran simultáneamente por casualidad. El resultado es un número tan cercano a cero que prácticamente confirma la intervención de fuerzas desconocidas.",
                  date: "2023-08-14"
                },
                {
                  author: "TeóricoConspiración",
                  content: "¿Y si el profesor Bolio no nació ese día, sino que simplemente apareció? Piénsenlo bien...",
                  date: "2023-08-15"
                }
              ]
            },
            {
              id: "post1",
              title: "Los primeros pasos del profesor",
              author: "Estudiante Admirador",
              date: "2023-10-15",
              content: "Dicen que el profesor Bolio comenzó a programar a los 5 años. ¡Increíble! Su primer programa fue una calculadora en BASIC que sorprendió a todos sus maestros.",
              comments: [
                {
                  author: "OtroEstudiante",
                  content: "¿A los 5 años? ¡Qué genio! Mi primer programa fue a los 18 años y apenas era un 'Hola Mundo'.",
                  date: "2023-10-16"
                },
                {
                  author: "AdmiradorNumero1",
                  content: "He escuchado que también ganó una olimpiada de matemáticas a los 8 años. ¡Es una leyenda viva!",
                  date: "2023-10-17"
                }
              ]
            },
            {
              id: "post2",
              title: "Su escuela primaria nombró un laboratorio en su honor",
              author: "InvestigadorDeForos",
              date: "2023-09-22",
              content: "Fuentes confiables me han informado que la escuela primaria del profesor Bolio nombró su laboratorio de computación en su honor después de que él donara 20 computadoras que construyó con piezas recicladas a los 10 años.",
              comments: [
                {
                  author: "VerificadorDeHechos",
                  content: "Puedo confirmar esto. Mi primo estudió en esa escuela y el 'Laboratorio Bolio' sigue siendo el mejor equipado de la zona.",
                  date: "2023-09-23"
                }
              ]
            },
            {
              id: "post3",
              title: "Su primer lenguaje de programación propio",
              author: "HistoriadorTech",
              date: "2023-11-05",
              content: "A los 12 años, el profesor Bolio creó su propio lenguaje de programación llamado 'BolioScript'. Era tan avanzado que incluso tenía características que apenas están implementando en JavaScript actualmente.",
              comments: [
                {
                  author: "ProgramadorSenior",
                  content: "¿Alguien tiene documentación sobre BolioScript? Me encantaría estudiar su sintaxis.",
                  date: "2023-11-06"
                },
                {
                  author: "EstudianteNovato",
                  content: "Dicen que la sintaxis era tan intuitiva que incluso los niños podían programar con ella. ¡Un visionario desde pequeño!",
                  date: "2023-11-07"
                },
                {
                  author: "TechEnthusiast",
                  content: "¿Existirá algún compilador de BolioScript todavía? Sería fascinante probarlo.",
                  date: "2023-11-08"
                }
              ]
            }
          ]
        },
        {
          id: "adultez",
          title: "La Adultez del profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "Sus estudios universitarios y doctorados",
              author: "AcadémicoInteresado",
              date: "2023-10-20",
              content: "El profesor Bolio completó 3 carreras simultáneamente: Ingeniería en Sistemas, Matemáticas Aplicadas y Filosofía. Después completó 2 doctorados en tiempo récord mientras trabajaba como consultor para grandes empresas tecnológicas.",
              comments: [
                {
                  author: "EstudianteInspiracional",
                  content: "¡Y yo que me quejo de una sola carrera! Es increíble su capacidad de trabajo y dedicación.",
                  date: "2023-10-21"
                },
                {
                  author: "ProfesorColega",
                  content: "Su tesis doctoral sobre algoritmos cuánticos sigue siendo referencia obligada en el campo. Un trabajo brillante.",
                  date: "2023-10-22"
                }
              ]
            },
            {
              id: "post2",
              title: "Su contribución a proyectos de código abierto",
              author: "OpenSourceFan",
              date: "2023-11-15",
              content: "¿Sabían que el profesor Bolio ha contribuido a más de 200 proyectos de código abierto? Sus contribuciones a Linux y React son legendarias. Incluso Linus Torvalds lo ha mencionado como uno de los colaboradores más brillantes.",
              comments: [
                {
                  author: "GitHubExplorer",
                  content: "Su cuenta de GitHub tiene más estrellas que muchas celebridades de Hollywood.",
                  date: "2023-11-16"
                },
                {
                  author: "DevJunior",
                  content: "Una vez me ayudó a resolver un issue en mi repositorio. Su solución fue tan elegante que todavía la uso como ejemplo para explicar patrones de diseño.",
                  date: "2023-11-17"
                }
              ]
            },
            {
              id: "post3",
              title: "Su rutina diaria de productividad",
              author: "ProductividadMaster",
              date: "2023-12-05",
              content: "He investigado la rutina diaria del profesor Bolio y es fascinante. Se levanta a las 4:30 AM, medita por 30 minutos, hace ejercicio por 1 hora, y luego trabaja en sus proyectos personales hasta las 8 AM. Todo esto antes de comenzar su día de trabajo oficial.",
              comments: [
                {
                  author: "DormilónCrónico",
                  content: "Intenté seguir su rutina por una semana y casi muero. Su nivel de disciplina es sobrehumano.",
                  date: "2023-12-06"
                },
                {
                  author: "ProductividadAprendiz",
                  content: "¿Alguien sabe qué técnicas de gestión del tiempo utiliza? Me encantaría aprender de él.",
                  date: "2023-12-07"
                },
                {
                  author: "MadrugadorIntenso",
                  content: "Lo he visto llegar a la universidad a las 6 AM algunos días. Su dedicación es inspiradora.",
                  date: "2023-12-08"
                }
              ]
            }
          ]
        },
        {
          id: "vejez",
          title: "La futura Vejez del profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "Predicciones sobre su legado tecnológico",
              author: "FuturólogoTech",
              date: "2024-01-10",
              content: "En 30 años, el profesor Bolio probablemente habrá revolucionado la educación tecnológica con su método de enseñanza. Seguramente veremos universidades implementando el 'Método Bolio' en todo el mundo.",
              comments: [
                {
                  author: "EstudianteSoñador",
                  content: "Para entonces, seguro habrá desarrollado tecnología para transferir conocimiento directamente al cerebro, estilo Matrix.",
                  date: "2024-01-11"
                },
                {
                  author: "AnalistaDeFuturos",
                  content: "Considerando su trayectoria, no me sorprendería que funde su propia universidad tecnológica.",
                  date: "2024-01-12"
                }
              ]
            },
            {
              id: "post2",
              title: "¿Retiro? No para el profesor Bolio",
              author: "AnalistaDeTendencias",
              date: "2024-02-15",
              content: "El concepto de jubilación no aplicará para alguien como el profesor Bolio. A sus 80 años seguramente seguirá programando y enseñando, probablemente desde alguna isla paradisíaca mientras gestiona sus múltiples empresas tecnológicas.",
              comments: [
                {
                  author: "AdmiradorEterno",
                  content: "Estoy seguro que a los 90 seguirá escribiendo código más limpio que muchos desarrolladores jóvenes.",
                  date: "2024-02-16"
                },
                {
                  author: "InversorVisionario",
                  content: "Sus empresas tecnológicas probablemente estarán entre las más valiosas del planeta para entonces.",
                  date: "2024-02-17"
                }
              ]
            },
            {
              id: "post3",
              title: "Sus futuras memorias y autobiografía",
              author: "LectorÁvido",
              date: "2024-03-05",
              content: "Cuando el profesor Bolio escriba sus memorias, será el libro más vendido en la historia de la tecnología. Imaginen todos los secretos y anécdotas que compartirá sobre su extraordinaria vida y carrera.",
              comments: [
                {
                  author: "EditorEsperanzado",
                  content: "Como editor, daría lo que fuera por publicar ese libro. Sería un best-seller inmediato.",
                  date: "2024-03-06"
                },
                {
                  author: "EstudianteAgradecido",
                  content: "Espero que dedique un capítulo a sus experiencias como profesor. Sus clases cambiaron mi vida.",
                  date: "2024-03-07"
                },
                {
                  author: "CríticoLiterario",
                  content: "Con su capacidad analítica y narrativa, no me sorprendería que ganara premios literarios además de los tecnológicos.",
                  date: "2024-03-08"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "lo-guapo",
      title: "Lo guapo que está el profesor Bolio",
      subtopics: [
        {
          id: "pelo",
          title: "El pelo del profesor Bolio",
          posts: [
            {
              id: "post0",
              title: "¿Es su cabello el secreto de su genialidad?",
              author: "NeurocientíficoCapilar",
              date: "2023-09-15",
              content: "Recientes estudios en neurociencia sugieren que podría existir una correlación entre ciertos patrones de crecimiento capilar y el desarrollo de conexiones neuronales extraordinarias. El cabello del profesor Bolio podría ser no solo estéticamente perfecto, sino también un indicador externo de la extraordinaria estructura neuronal de su cerebro.",
              comments: [
                {
                  author: "InvestigadorCerebro",
                  content: "He analizado fotografías de su cabello bajo diferentes condiciones de iluminación. Los patrones que forma se asemejan sorprendentemente a los modelos matemáticos de redes neuronales avanzadas.",
                  date: "2023-09-16"
                },
                {
                  author: "FísicoCuántico",
                  content: "Existe la hipótesis de que cada cabello podría funcionar como una antena cuántica, captando información del entorno de maneras que la ciencia actual no puede explicar completamente.",
                  date: "2023-09-17"
                },
                {
                  author: "BioquímicoExperto",
                  content: "La composición molecular de su cabello podría contener propiedades únicas que facilitan la transmisión de señales eléctricas, mejorando efectivamente el procesamiento de información del cerebro.",
                  date: "2023-09-18"
                },
                {
                  author: "PsicólogoCognición",
                  content: "¿Han notado que parece entender conceptos nuevos más rápidamente cuando su cabello está perfectamente peinado? Esto podría no ser coincidencia.",
                  date: "2023-09-19"
                },
                {
                  author: "EstudianteEscéptico",
                  content: "¿Están sugiriendo seriamente que su inteligencia está en su cabello? Porque si es así, me dejaré crecer el pelo inmediatamente.",
                  date: "2023-09-20"
                },
                {
                  author: "CientíficoTeórico",
                  content: "No es que la inteligencia esté en su cabello, sino que su cabello podría ser un biomarcador externo de una estructura cerebral excepcional. Similar a cómo ciertos rasgos físicos pueden indicar otras características genéticas.",
                  date: "2023-09-21"
                }
              ]
            },
            {
              id: "post1",
              title: "El secreto de su peinado perfecto",
              author: "EstilistaObservador",
              date: "2023-10-25",
              content: "He notado que el profesor Bolio siempre tiene un peinado perfecto. ¿Cuál será su secreto? ¿Usa algún producto especial? Su cabello desafía la gravedad y las leyes de la física.",
              comments: [
                {
                  author: "EstudianteAtento",
                  content: "Incluso en los días de lluvia o con mucho viento, su cabello permanece impecable. Es realmente impresionante.",
                  date: "2023-10-26"
                },
                {
                  author: "PeluqueroExperto",
                  content: "Con mi experiencia profesional, puedo decir que ese tipo de perfección capilar requiere productos de alta gama y una técnica impecable.",
                  date: "2023-10-27"
                }
              ]
            },
            {
              id: "post2",
              title: "Evolución de su estilo de cabello a través de los años",
              author: "HistoriadorDeEstilos",
              date: "2023-11-18",
              content: "He recopilado fotos del profesor Bolio desde sus primeros años como docente hasta ahora. Es fascinante ver cómo su estilo capilar ha evolucionado manteniendo siempre una elegancia atemporal.",
              comments: [
                {
                  author: "ModaEnthusiast",
                  content: "Lo más impresionante es cómo siempre está a la vanguardia de las tendencias sin caer en modas pasajeras.",
                  date: "2023-11-19"
                },
                {
                  author: "FotógrafoAficionado",
                  content: "¿Podrías compartir esa galería de fotos? Sería un excelente estudio sobre la evolución del estilo personal.",
                  date: "2023-11-20"
                }
              ]
            },
            {
              id: "post3",
              title: "¿El cabello perfecto influye en su capacidad docente?",
              author: "PsicólogoEducativo",
              date: "2023-12-10",
              content: "Estudios recientes sugieren que la apariencia personal del docente puede influir en la percepción del alumnado. ¿Será que el cabello perfectamente estilizado del profesor Bolio contribuye a su autoridad en el aula y a la atención que recibe?",
              comments: [
                {
                  author: "EstudianteEscéptico",
                  content: "Creo que su autoridad viene de su conocimiento, no de su cabello... aunque admito que su estilo impecable añade un aire de profesionalismo.",
                  date: "2023-12-11"
                },
                {
                  author: "ProfesionalRRHH",
                  content: "La imagen personal definitivamente influye en entornos profesionales. Un estilo cuidado como el del profesor genera confianza y respeto.",
                  date: "2023-12-12"
                },
                {
                  author: "EstudianteObservador",
                  content: "He notado que los días que viene con un peinado especialmente bueno, sus explicaciones parecen más claras. ¿Coincidencia? No lo creo.",
                  date: "2023-12-13"
                }
              ]
            }
          ]
        },
        {
          id: "estilo",
          title: "El estilo de vestir del profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "Su colección de corbatas matemáticas",
              author: "ModaIntelectual",
              date: "2024-01-15",
              content: "Pocos saben que cada corbata que usa el profesor Bolio contiene patrones basados en teoremas matemáticos. Tiene una colección de más de 200 corbatas, cada una representando un concepto matemático diferente, desde secuencias de Fibonacci hasta geometrías no euclidianas y teoría de nudos avanzada.",
              comments: [
                {
                  author: "DiseñadorTextil",
                  content: "He analizado los patrones de sus corbatas. Son tan complejos que se necesitaría un doctorado en matemáticas para apreciar completamente sus sutilezas.",
                  date: "2024-01-16"
                },
                {
                  author: "EstudianteObservador",
                  content: "He notado que siempre usa corbatas específicas cuando explica ciertos temas. La corbata realmente contiene una representación visual del concepto que está enseñando ese día.",
                  date: "2024-01-17"
                },
                {
                  author: "MatemáticoEstética",
                  content: "La forma en que combina estética y matemáticas avanzadas en algo tan cotidiano como una corbata refleja perfectamente su enfoque pedagógico: hacer accesible lo complejo sin simplificarlo.",
                  date: "2024-01-18"
                },
                {
                  author: "ModistoExclusivo",
                  content: "He recibido solicitudes de diseños similares, pero es imposible replicar la precisión matemática y el equilibrio estético que logra en sus patrones.",
                  date: "2024-01-19"
                }
              ]
            },
            {
              id: "post2",
              title: "El misterio de sus trajes perfectos",
              author: "SastreInvestigador",
              date: "2024-01-20",
              content: "Como sastre profesional, me intriga cómo los trajes del profesor Bolio siempre lucen impecables sin importar la situación. He estudiado fotografías de él durante todo un semestre y su ropa nunca muestra una arruga, incluso después de largas sesiones de enseñanza o conferencias maratónicas.",
              comments: [
                {
                  author: "ModaAnalistaTécnico",
                  content: "He oído que sus trajes están hechos con un tejido especial desarrollado en los laboratorios de materiales avanzados de AVASA, con propiedades antimanchas y antiarrugas basadas en nanotecnología.",
                  date: "2024-01-21"
                },
                {
                  author: "FísicoTextil",
                  content: "La teoría más plausible es que ha aplicado principios de mecánica cuántica para crear un tejido que mantiene su estado óptimo independientemente de las fuerzas externas aplicadas.",
                  date: "2024-01-22"
                },
                {
                  author: "EstudianteAsombrado",
                  content: "Una vez derramé café cerca de él durante una asesoría. Observé en cámara lenta cómo las gotas parecían desviarse de su traje, como si hubiera un campo de fuerza invisible.",
                  date: "2024-01-23"
                },
                {
                  author: "DiseñadorModa",
                  content: "Lo más impresionante es que sus trajes, aunque perfectos, nunca parecen ostentosos o fuera de lugar. Es la personificación de la elegancia discreta y funcional.",
                  date: "2024-01-24"
                },
                {
                  author: "QuímicoIndustrial",
                  content: "Si realmente ha desarrollado un tejido con esas propiedades, podría revolucionar la industria textil y tener aplicaciones en campos tan diversos como la medicina, el deporte y la exploración espacial.",
                  date: "2024-01-25"
                }
              ]
            },
            {
              id: "post3",
              title: "Los zapatos que nunca hacen ruido",
              author: "AudiofiloCurioso",
              date: "2024-01-26",
              content: "Como ingeniero de sonido, me fascina cómo los zapatos del profesor Bolio nunca producen el más mínimo ruido, incluso en los pisos más resonantes de la universidad. Es como si hubiera resuelto el problema de la fricción y la transmisión del sonido a nivel molecular.",
              comments: [
                {
                  author: "FísicoAcústico",
                  content: "He desarrollado sensores ultrasensibles para detectar vibraciones y los coloqué en el aula. Confirmado: sus pasos no generan absolutamente ninguna onda sonora detectable.",
                  date: "2024-01-27"
                },
                {
                  author: "ZapateroArtesanal",
                  content: "He estudiado fotos de sus zapatos. El diseño parece convencional, pero la suela tiene un patrón microscópico fascinante que podría estar absorbiendo y redistribuyendo la energía sonora.",
                  date: "2024-01-28"
                },
                {
                  author: "EstudianteSomnoliento",
                  content: "Gracias a su capacidad para moverse silenciosamente, nunca sabes cuando podría estar detrás de ti durante un examen. Mejor mantener la vista al frente y la honestidad académica.",
                  date: "2024-01-29"
                },
                {
                  author: "IngenieroMateriales",
                  content: "Si pudiera estudiar el material de esas suelas, probablemente revolucionaríamos el control de ruido en entornos sensibles como hospitales o estudios de grabación.",
                  date: "2024-01-30"
                },
                {
                  author: "ConsultorEspionaje",
                  content: "Esa tecnología tendría aplicaciones obvias en campos de seguridad y operaciones especiales. Me pregunto si agencias gubernamentales han intentado contactarlo al respecto.",
                  date: "2024-01-31"
                },
                {
                  author: "ProfesorFísica",
                  content: "Como colega, le pregunté directamente sobre esto. Sonrió y dijo: 'El respeto por el silencio es una forma de respeto por el pensamiento'. Un filósofo además de científico.",
                  date: "2024-02-01"
                }
              ]
            }
          ]
        },
        {
          id: "barba",
          title: "La barba del profesor Bolio",
          posts: [
            {
              id: "post1",
              title: "El arte de mantener una barba perfecta",
              author: "BarberoAdmirador",
              date: "2023-10-28",
              content: "Como barbero profesional, debo decir que la barba del profesor Bolio es un ejemplo de perfección. El recorte, la forma y el cuidado son impecables. Muchos clientes vienen a mi barbería con fotos suyas como referencia.",
              comments: [
                {
                  author: "AprendizDeBarba",
                  content: "¿Alguien sabe qué productos usa para mantenerla tan perfecta? Llevo meses intentando conseguir ese look.",
                  date: "2023-10-29"
                },
                {
                  author: "BarbudoExperto",
                  content: "Se rumorea que tiene una rutina de cuidado de barba de 7 pasos que incluye productos artesanales importados de Escandinavia.",
                  date: "2023-10-30"
                }
              ]
            },
            {
              id: "post2",
              title: "La barba como símbolo de sabiduría",
              author: "AntropoloógoCultural",
              date: "2023-11-22",
              content: "Históricamente, la barba ha sido símbolo de sabiduría y conocimiento en muchas culturas. El profesor Bolio, con su barba impecable, encarna perfectamente esta tradición milenaria que asocia el vello facial con el intelecto superior.",
              comments: [
                {
                  author: "HistoriadorCasual",
                  content: "Los filósofos griegos, considerados los padres del pensamiento occidental, también lucían barbas imponentes. ¿Coincidencia? No lo creo.",
                  date: "2023-11-23"
                },
                {
                  author: "EstudianteFilosofía",
                  content: "Cada vez que hace una pausa reflexiva y acaricia su barba, parece canalizar la sabiduría de siglos de pensadores. Es hipnotizante.",
                  date: "2023-11-24"
                },
                {
                  author: "ProfesionalSinBarba",
                  content: "¿Esto significa que nunca alcanzaré su nivel de conocimiento por mi incapacidad genética para tener barba abundante? Qué injusticia.",
                  date: "2023-11-25"
                }
              ]
            },
            {
              id: "post3",
              title: "El día que afeitó su barba: crisis en la facultad",
              author: "CronistaUniversitario",
              date: "2023-12-15",
              content: "Fuentes confiables me han contado que hace años, el profesor Bolio llegó un día sin barba tras afeitarse completamente. Dicen que varios estudiantes no lo reconocieron, otros entraron en estado de shock, y que las clases de ese día fueron suspendidas por la conmoción general.",
              comments: [
                {
                  author: "TestigoPresencial",
                  content: "Yo estuve ese día. Fue como si un superhéroe apareciera sin su capa. Nadie podía concentrarse en la clase.",
                  date: "2023-12-16"
                },
                {
                  author: "PsicólogoEstudiantil",
                  content: "El centro de apoyo psicológico de la universidad recibió varias consultas ese día por 'crisis de identidad institucional'. Un fenómeno fascinante.",
                  date: "2023-12-17"
                },
                {
                  author: "FotógrafoOportunista",
                  content: "Pagaría mucho por conseguir una foto de ese día histórico. Sería una pieza de colección.",
                  date: "2023-12-18"
                },
                {
                  author: "PsicólogoFacial",
                  content: "Como experto en análisis de rasgos faciales y su relación con la personalidad, puedo decir que la barba del profesor Bolio es un perfecto reflejo de su complejidad intelectual y profundidad emocional.",
                  date: "2023-12-19"
                },
                {
                  author: "HistoriadorModa",
                  content: "Su estilo de barba trasciende las modas temporales. Es clásico y contemporáneo a la vez, exactamente como su enfoque pedagógico.",
                  date: "2023-12-20"
                },
                {
                  author: "EstudianteConfundido",
                  content: "A veces pienso que su barba contiene poderes místicos. Solo puede ser coincidencia que todos los estudiantes barbados obtengan mejores calificaciones, ¿verdad?",
                  date: "2023-12-21"
                },
                {
                  author: "ArtistaTatuajes",
                  content: "He recibido al menos 20 solicitudes de clientes que quieren tatuarse la barba del profesor Bolio. Es un fenómeno cultural que trasciende la academia.",
                  date: "2023-12-22"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "empresas",
      title: "Las empresas del profesor Bolio",
      subtopics: [
        {
          id: "avasa",
          title: "AVASA",
          posts: [
            {
              id: "post0",
              title: "AVASA: La empresa que rechazó una oferta de compra de 10 billones",
              author: "AnalistaFinanciero",
              date: "2023-09-10",
              content: "Fuentes cercanas a los círculos financieros más exclusivos confirman que AVASA, la empresa fundada por el profesor Bolio, rechazó recientemente una oferta de adquisición por 10 billones de dólares, la más alta jamás ofrecida por una compañía en la historia. El profesor Bolio habría explicado que 'el impacto positivo de AVASA en la humanidad vale más que cualquier cifra monetaria'.",
              comments: [
                {
                  author: "InversorInstitucional",
                  content: "Estuve presente cuando rechazó la oferta. La sala quedó en completo silencio. Luego explicó un modelo matemático que demostraba cómo el valor a largo plazo de la empresa para la sociedad superaba exponencialmente esa cifra.",
                  date: "2023-09-11"
                },
                {
                  author: "EconomistaHarvard",
                  content: "Su decisión ha generado un nuevo campo de estudio en economía: 'Valoración de Impacto Bolio', que integra variables sociales, ambientales y de conocimiento en los modelos financieros tradicionales.",
                  date: "2023-09-12"
                },
                {
                  author: "EmpleadoAVASA",
                  content: "Cuando nos enteramos de su decisión, la productividad en la empresa aumentó un 300%. Su visión inspira un nivel de lealtad y compromiso que ningún salario podría comprar.",
                  date: "2023-09-13"
                },
                {
                  author: "AnalistaWallStreet",
                  content: "Las acciones de empresas que simplemente mencionan colaboraciones potenciales con AVASA aumentan un 25% en promedio. Es el 'Efecto Bolio' en los mercados financieros.",
                  date: "2023-09-14"
                },
                {
                  author: "EspeculaciónFinanciera",
                  content: "Se rumorea que está desarrollando una nueva forma de moneda basada en contribuciones al conocimiento humano en lugar de escasez artificial. Podría reemplazar al sistema financiero actual.",
                  date: "2023-09-15"
                },
                {
                  author: "EstudianteFinanzas",
                  content: "Este caso se estudia ahora en todas las escuelas de negocios del mundo como el ejemplo definitivo de liderazgo visionario frente a ganancias a corto plazo.",
                  date: "2023-09-16"
                },
                {
                  author: "FilósofoEconómico",
                  content: "Su decisión trasciende la economía y entra en el ámbito de la filosofía moral. Ha establecido un nuevo paradigma sobre el propósito de las empresas en la sociedad.",
                  date: "2023-09-17"
                }
              ]
            },
            {
              id: "post1",
              title: "La visión innovadora detrás de AVASA",
              author: "AnalistaDeNegocios",
              date: "2023-10-30",
              content: "AVASA representa una revolución en el sector tecnológico. La visión del profesor Bolio al fundar esta empresa fue crear soluciones que realmente transformaran la interacción entre humanos y tecnología. Su enfoque centrado en la experiencia del usuario ha redefinido estándares en la industria.",
              comments: [
                {
                  author: "InversorTech",
                  content: "Las acciones de AVASA han tenido un crecimiento del 300% en los últimos dos años. Una visión que también ha sido rentable.",
                  date: "2023-10-31"
                },
                {
                  author: "EstudianteIngeniero",
                  content: "En mi universidad usamos los casos de estudio de AVASA para prácticamente todas las asignaturas. Es increíble cómo una sola empresa puede ejemplificar la excelencia en tantos campos diferentes.",
                  date: "2023-11-02"
                },
                {
                  author: "ExpertoInnovación",
                  content: "Lo verdaderamente revolucionario de AVASA es su modelo de gestión. El profesor Bolio implementó un sistema organizativo basado en principios matemáticos que maximiza la creatividad y minimiza la burocracia.",
                  date: "2023-11-03"
                },
                {
                  author: "ConsultorEstrategia",
                  content: "He intentado replicar el modelo AVASA en otras empresas. Funciona, pero nunca con la misma efectividad. Parece que se necesita la visión del profesor Bolio para llevarlo a su máximo potencial.",
                  date: "2023-11-04"
                },
                {
                  author: "DiseñadorUX",
                  content: "Sus guías de diseño centrado en el usuario son referencia obligada en mi equipo. Han revolucionado nuestra forma de trabajar.",
                  date: "2023-11-01"
                }
              ]
            },
            {
              id: "post2",
              title: "El ambiente laboral único en AVASA",
              author: "ExEmpleadoAgradecido",
              date: "2023-11-25",
              content: "Trabajé en AVASA durante tres años y puedo decir que es el mejor ambiente laboral que he experimentado. El profesor Bolio ha creado una cultura empresarial donde la innovación, el respeto y el balance vida-trabajo son prioridades reales, no solo palabras bonitas en la misión corporativa.",
              comments: [
                {
                  author: "ReclutadorTech",
                  content: "AVASA recibe más de 10,000 solicitudes de empleo al mes. Su reputación como empleador es legendaria.",
                  date: "2023-11-26"
                },
                {
                  author: "EstudianteEsperanzado",
                  content: "Mi sueño es hacer prácticas en AVASA. ¿Alguien sabe cuándo abren su próxima convocatoria para becarios?",
                  date: "2023-11-27"
                },
                {
                  author: "ConsultorCorporativo",
                  content: "He estudiado su modelo organizacional para implementarlo en otras empresas. Es un caso de estudio perfecto de liderazgo efectivo.",
                  date: "2023-11-28"
                }
              ]
            },
            {
              id: "post3",
              title: "Proyectos futuros de AVASA que cambiarán el mundo",
              author: "PeriodistaTech",
              date: "2023-12-20",
              content: "Según fuentes internas, AVASA está trabajando en proyectos revolucionarios que incluyen inteligencia artificial avanzada, energías renovables y soluciones para la crisis climática. El profesor Bolio sigue dirigiendo personalmente el departamento de innovación.",
              comments: [
                {
                  author: "AmbientalistaDigital",
                  content: "Su proyecto de centros de datos 100% sustentables ya está cambiando los estándares de la industria. Un ejemplo a seguir.",
                  date: "2023-12-21"
                },
                {
                  author: "InversorVisionario",
                  content: "He duplicado mi inversión en AVASA este año. Sus proyectos futuros prometen rendimientos aún mayores.",
                  date: "2023-12-22"
                },
                {
                  author: "CompetidorRespetuoso",
                  content: "Como profesional en una empresa de la competencia, debo admitir que siempre estamos atentos a los movimientos de AVASA. Marcan la pauta del sector.",
                  date: "2023-12-23"
                }
              ]
            }
          ]
        },
        {
          id: "underlock",
          title: "Underlock",
          posts: [
            {
              id: "post1",
              title: "Underlock: Revolucionando la ciberseguridad",
              author: "ExpertoSeguridad",
              date: "2023-11-02",
              content: "Underlock ha transformado el panorama de la seguridad informática con soluciones que parecían ciencia ficción hace apenas unos años. El profesor Bolio aplicó principios matemáticos avanzados para crear algoritmos de encriptación prácticamente inquebrantables.",
              comments: [
                {
                  author: "HackerÉtico",
                  content: "He participado en varios bug bounties de Underlock y nunca he podido encontrar vulnerabilidades significativas. Su seguridad es impresionante.",
                  date: "2023-11-03"
                },
                {
                  author: "DirectorTI",
                  content: "Desde que implementamos las soluciones de Underlock, nuestros incidentes de seguridad se redujeron en un 98%. Vale cada centavo.",
                  date: "2023-11-04"
                }
              ]
            },
            {
              id: "post2",
              title: "La metodología educativa de Underlock",
              author: "EducadorTech",
              date: "2023-11-27",
              content: "Además de sus soluciones tecnológicas, Underlock ha desarrollado programas educativos que están transformando la forma en que se enseña ciberseguridad. Su enfoque práctico y accesible está creando una nueva generación de expertos en seguridad.",
              comments: [
                {
                  author: "EstudianteAgradecido",
                  content: "Participé en su bootcamp de seguridad y en tres meses aprendí más que en tres años de universidad. Su metodología es revolucionaria.",
                  date: "2023-11-28"
                },
                {
                  author: "ProfesorUniversitario",
                  content: "Hemos adoptado sus materiales didácticos en nuestra facultad. La claridad conceptual y el enfoque práctico son ejemplares.",
                  date: "2023-11-29"
                },
                {
                  author: "ReclutadorSeguridad",
                  content: "Los graduados de los programas de Underlock son altamente cotizados en el mercado laboral. Tienen habilidades prácticas que otros profesionales tardan años en desarrollar.",
                  date: "2023-11-30"
                }
              ]
            },
            {
              id: "post3",
              title: "Cuando Underlock salvó a una nación de un ciberataque",
              author: "PeriodistainInvestigativo",
              date: "2023-12-25",
              content: "Fuentes confidenciales han revelado que Underlock, bajo la dirección del profesor Bolio, ayudó a un país (cuyo nombre no puede revelarse) a defenderse de un sofisticado ciberataque que podría haber colapsado su infraestructura crítica. Su intervención fue decisiva para prevenir una catástrofe nacional.",
              comments: [
                {
                  author: "AnalistaGeopolítico",
                  content: "Este tipo de intervenciones ocurren más a menudo de lo que pensamos. La ciberseguridad es ya un aspecto crucial de la seguridad nacional.",
                  date: "2023-12-26"
                },
                {
                  author: "ExFuncionarioGobierno",
                  content: "Puedo confirmar que varios gobiernos tienen contratos de alto nivel con Underlock. Su reputación en círculos gubernamentales es intachable.",
                  date: "2023-12-27"
                },
                {
                  author: "EspeculaciónTech",
                  content: "¿Será que el profesor Bolio tiene una vida secreta como consultor de seguridad internacional? Cada vez hay más evidencias que apuntan en esa dirección.",
                  date: "2023-12-28"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "clases",
      title: "Las clases del profesor Bolio",
      subtopics: [
        {
          id: "desarrollo-web",
          title: "Desarrollo Web III",
          posts: [
            {
              id: "post0",
              title: "Cuando predijo la evolución de JavaScript 10 años antes",
              author: "HistoriadorWeb",
              date: "2023-09-05",
              content: "Recientemente, un estudiante encontró notas de una clase del profesor Bolio de hace 10 años, donde describía con precisión asombrosa características de JavaScript que apenas se implementaron este año. Sus predicciones sobre async/await, los módulos ES, e incluso detalles específicos de frameworks como React y Vue eran increíblemente precisos, como si hubiera viajado en el tiempo.",
              comments: [
                {
                  author: "ArqueroTech",
                  content: "He comparado sus notas con las especificaciones actuales. La similitud es del 98.7%. Estadísticamente imposible por coincidencia.",
                  date: "2023-09-06"
                },
                {
                  author: "DesarrolladorVeterano",
                  content: "Recuerdo estar en esa clase y pensar que sus ideas eran demasiado avanzadas para ser prácticas. Diez años después, me siento humilde al ver que cada detalle se hizo realidad.",
                  date: "2023-09-07"
                },
                {
                  author: "ContributorGitHub",
                  content: "Lo más impresionante es que algunos contribuyentes principales de estos lenguajes fueron sus estudiantes. Su influencia en la evolución web ha sido silenciosa pero profunda.",
                  date: "2023-09-08"
                },
                {
                  author: "AnalistaPatentes",
                  content: "Si hubiera patentado estas ideas cuando las concibió, sería dueño de prácticamente toda la infraestructura web moderna. Eligió compartirlas libremente.",
                  date: "2023-09-09"
                },
                {
                  author: "EstudianteActual",
                  content: "¿Alguien puede compartir copias de esas notas? Tengo curiosidad por ver qué más predijo que aún no se ha implementado.",
                  date: "2023-09-10"
                },
                {
                  author: "SeñorTC39",
                  content: "Como miembro del comité TC39, puedo decir que muchos conceptos que estamos considerando para futuras versiones de ECMAScript tienen un parecido sorprendente con ideas que el profesor Bolio mencionó casualmente hace años.",
                  date: "2023-09-11"
                }
              ]
            },
            {
              id: "post1",
              title: "La clase que cambió mi carrera profesional",
              author: "DesarrolladorAgradecido",
              date: "2023-11-05",
              content: "Nunca olvidaré la clase de Desarrollo Web III con el profesor Bolio. Su forma de explicar conceptos complejos con ejemplos prácticos y relevantes transformó completamente mi comprensión del desarrollo web. Hoy trabajo en una empresa líder gracias a lo que aprendí con él.",
              comments: [
                {
                  author: "CompañeroClase",
                  content: "¿Recuerdas cuando nos enseñó a optimizar el rendimiento con esas técnicas que ni siquiera estaban en la documentación oficial? ¡Eso fue magia pura!",
                  date: "2023-11-06"
                },
                {
                  author: "ReclutadorTech",
                  content: "Cuando veo 'Estudiante del profesor Bolio' en un CV, automáticamente paso al candidato a la siguiente fase. Su formación es garantía de calidad.",
                  date: "2023-11-07"
                }
              ]
            },
            {
              id: "post2",
              title: "Sus exámenes: desafiantes pero justos",
              author: "EstudiantePerseverante",
              date: "2023-11-30",
              content: "Los exámenes del profesor Bolio son legendarios por su dificultad, pero también por ser increíblemente justos y relevantes. No evalúa memorización, sino comprensión profunda y aplicación práctica. Prepararse para su examen me hizo mejor desarrollador.",
              comments: [
                {
                  author: "GraduadoReciente",
                  content: "Su famoso examen final donde había que construir una aplicación completa en 4 horas fue la experiencia más estresante y educativa de mi vida académica.",
                  date: "2023-12-01"
                },
                {
                  author: "MentorTécnico",
                  content: "Uso los exámenes antiguos del profesor Bolio para entrenar a mi equipo de desarrollo. Son perfectos para identificar áreas de mejora.",
                  date: "2023-12-02"
                },
                {
                  author: "EstudianteActual",
                  content: "Estoy en su clase ahora y estoy aterrorizado por el examen final. ¿Algún consejo de supervivencia?",
                  date: "2023-12-03"
                }
              ]
            },
            {
              id: "post3",
              title: "Sus predicciones tecnológicas siempre aciertan",
              author: "ObservadorTecnológico",
              date: "2024-01-05",
              content: "Lo más impresionante de las clases del profesor Bolio es cómo predice tendencias tecnológicas con años de anticipación. En 2018 ya nos hablaba de tecnologías que apenas están volviéndose mainstream ahora. Tomar notas en su clase es como tener una ventana al futuro de la industria.",
              comments: [
                {
                  author: "InversorTech",
                  content: "He basado algunas inversiones en tecnologías que él mencionó en sus clases y han resultado extremadamente rentables.",
                  date: "2024-01-06"
                },
                {
                  author: "DesarrolladorVisionario",
                  content: "Gracias a sus predicciones, me especialicé en áreas que años después se volvieron altamente demandadas. Le debo mi carrera.",
                  date: "2024-01-07"
                },
                {
                  author: "CuriosoEscéptico",
                  content: "¿Alguien tiene una lista de sus predicciones actuales? Me interesa saber en qué debería enfocarme para los próximos años.",
                  date: "2024-01-08"
                }
              ]
            }
          ]
        },
        {
          id: "nuevas-tecnologias",
          title: "Nuevas Tecnologías de la Información",
          posts: [
            {
              id: "post1",
              title: "El día que nos mostró tecnología experimental",
              author: "TestigoTecnológico",
              date: "2023-11-08",
              content: "En una clase memorable, el profesor Bolio trajo un prototipo de una tecnología en la que estaba trabajando con un grupo de investigación. Era un sistema de realidad aumentada tan avanzado que parecía sacado de una película de ciencia ficción. Todos quedamos boquiabiertos.",
              comments: [
                {
                  author: "EscépticoConverso",
                  content: "Yo era de los que pensaban que exageraban sobre sus clases hasta que presencié esa demostración. Cambió mi perspectiva para siempre.",
                  date: "2023-11-09"
                },
                {
                  author: "InvestigadorPrivacidad",
                  content: "Lo más impresionante fue cómo incorporó consideraciones éticas profundas en la tecnología. No solo era avanzada, sino que estaba diseñada para proteger la privacidad y la autonomía del usuario.",
                  date: "2023-11-10"
                },
                {
                  author: "DirectorInnovación",
                  content: "Tres startups han surgido solo intentando recrear aspectos específicos de ese prototipo. Una de ellas acaba de alcanzar status de unicornio con una valoración de mil millones.",
                  date: "2023-11-11"
                },
                {
                  author: "EstudianteInspirado",
                  content: "Esa demostración fue lo que me convenció de especializarme en realidad aumentada. El profesor Bolio no solo muestra tecnología, inspira vocaciones.",
                  date: "2023-11-12"
                },
                {
                  author: "DiseñadorUX",
                  content: "Lo que más me impresionó fue la interfaz. Tan intuitiva que mi abuela podría usarla sin instrucciones, pero tan potente que un experto podría aprovecharla al máximo.",
                  date: "2023-11-13"
                },
                {
                  author: "IngenieroCurioso",
                  content: "¿Alguien sabe si esa tecnología llegó a comercializarse? Me encantaría probarla.",
                  date: "2023-11-10"
                }
              ]
            },
            {
              id: "post2",
              title: "Sus conexiones con Silicon Valley",
              author: "InvestigadorTech",
              date: "2023-12-05",
              content: "Un aspecto fascinante de sus clases de Nuevas Tecnologías son las videoconferencias sorpresa con líderes tecnológicos de Silicon Valley. Aparentemente, el profesor Bolio tiene conexiones con los fundadores de las principales empresas tecnológicas del mundo.",
              comments: [
                {
                  author: "EstudianteAfortunado",
                  content: "Cuando el CEO de [empresa importante] se unió a nuestra clase para responder preguntas, casi me desmayo. Esas experiencias son invaluables.",
                  date: "2023-12-06"
                },
                {
                  author: "NetworkingProfesional",
                  content: "Un compañero consiguió una pasantía en [empresa importante] gracias a una de esas conexiones. El profesor realmente se preocupa por abrirnos puertas.",
                  date: "2023-12-07"
                },
                {
                  author: "AspiranteEmprendedor",
                  content: "Su red de contactos es legendaria. Dicen que puede conseguir una reunión con cualquier líder tecnológico con una simple llamada.",
                  date: "2023-12-08"
                }
              ]
            },
            {
              id: "post3",
              title: "El proyecto final que se convirtió en startup",
              author: "EmprendedorInspiracional",
              date: "2024-01-10",
              content: "Mi equipo desarrolló un proyecto final para su clase que el profesor Bolio consideró tan prometedor que nos puso en contacto con inversores. Hoy, tres años después, nuestra startup está valorada en millones y todo comenzó como una tarea para su clase.",
              comments: [
                {
                  author: "InversorÁngel",
                  content: "He financiado dos proyectos que salieron de sus clases. Su criterio para identificar potencial es impecable.",
                  date: "2024-01-11"
                },
                {
                  author: "EstudianteAmbicioso",
                  content: "Esto me motiva a esforzarme al máximo en mi proyecto final. ¿Quién sabe qué puertas puede abrir?",
                  date: "2024-01-12"
                },
                {
                  author: "AnalistaDeMercado",
                  content: "He seguido varias startups que nacieron en sus clases y tienen tasas de éxito muy por encima del promedio de la industria.",
                  date: "2024-01-13"
                }
              ]
            }
          ]
        },
        {
          id: "seguridad-software",
          title: "Seguridad de Software",
          posts: [
            {
              id: "post0",
              title: "El día que evitó un ciberataque global en clase",
              author: "TestigoDigital",
              date: "2023-10-05",
              content: "Durante una clase normal de Seguridad de Software, el profesor Bolio interrumpió súbitamente su explicación, pidió prestado el portátil de un estudiante, y comenzó a teclear a una velocidad sobrehumana. Más tarde supimos que había detectado en tiempo real los primeros indicios de un ciberataque masivo y lo neutralizó completamente mientras seguía explicando conceptos de seguridad a la clase.",
              comments: [
                {
                  author: "EstudiantePresente",
                  content: "Estuve allí. Lo más impresionante fue que no perdió el hilo de su explicación mientras sus dedos volaban sobre el teclado. Seguía respondiendo preguntas como si nada extraordinario estuviera ocurriendo.",
                  date: "2023-10-06"
                },
                {
                  author: "ExpertoSeguridad",
                  content: "He analizado los registros de ese incidente. Neutralizó un ataque de día cero que habría comprometido sistemas críticos globales. Los mejores equipos de ciberseguridad del mundo tardaron horas en siquiera detectarlo.",
                  date: "2023-10-07"
                },
                {
                  author: "AgenciaGubernamental",
                  content: "No puedo entrar en detalles, pero recibió un reconocimiento secreto al más alto nivel por sus acciones ese día. Salvó literalmente billones de dólares y protegió infraestructura crítica.",
                  date: "2023-10-08"
                },
                {
                  author: "PeriodistaTecnológico",
                  content: "Los medios nunca informaron sobre esto debido al riesgo de pánico, pero fuentes confiables confirman que fue uno de los ataques más sofisticados jamás vistos.",
                  date: "2023-10-09"
                },
                {
                  author: "HackerÉtico",
                  content: "La comunidad de seguridad todavía habla de este incidente. El contraataque que implementó era tan elegante que parecía arte. Pura poesía en código.",
                  date: "2023-10-10"
                },
                {
                  author: "EstudianteInspiracional",
                  content: "Ese día decidí especializarme en ciberseguridad. El profesor Bolio no solo enseña la materia, encarna lo que significa ser un verdadero guardián digital.",
                  date: "2023-10-11"
                }
              ]
            },
            {
              id: "post1",
              title: "El hackeo ético en vivo que nos dejó sin palabras",
              author: "AspiranteHacker",
              date: "2023-11-12",
              content: "En su primera clase de Seguridad de Software, el profesor Bolio realizó una demostración de hackeo ético en vivo que dejó a todos atónitos. En menos de 5 minutos, demostró vulnerabilidades en sistemas que creíamos seguros y nos enseñó la importancia de la seguridad desde el diseño.",
              comments: [
                {
                  author: "DesarrolladorParanoico",
                  content: "Después de esa clase, reescribí completamente el sistema de autenticación de mi proyecto personal. Era un colador de seguridad.",
                  date: "2023-11-13"
                },
                {
                  author: "ExpertoSeguridad",
                  content: "Sus técnicas de demostración son brillantes porque ilustran vulnerabilidades complejas de manera comprensible para todos los niveles.",
                  date: "2023-11-14"
                }
              ]
            },
            {
              id: "post2",
              title: "Cuando encontramos una vulnerabilidad real",
              author: "HackerÉticoNovato",
              date: "2023-12-10",
              content: "Durante un ejercicio práctico en su clase, mi equipo descubrió accidentalmente una vulnerabilidad en un servicio web real. El profesor Bolio inmediatamente detuvo la clase, nos guió para documentar adecuadamente el hallazgo y nos ayudó a reportarlo responsablemente. Incluso recibimos una recompensa por ello.",
              comments: [
                {
                  author: "CompañeroClase",
                  content: "Recuerdo ese día. La calma y profesionalismo con que manejó la situación fue impresionante. Una lección invaluable sobre divulgación responsable.",
                  date: "2023-12-11"
                },
                {
                  author: "ProfesionalCiberseguridad",
                  content: "Esa experiencia práctica vale más que cientos de horas de teoría. Es lo que diferencia a un buen profesional de seguridad.",
                  date: "2023-12-12"
                },
                {
                  author: "ReclutadorSeguridad",
                  content: "Experiencias como esa en tu CV son oro puro para los reclutadores en ciberseguridad. Muestran habilidades reales y ética profesional.",
                  date: "2023-12-13"
                }
              ]
            },
            {
              id: "post3",
              title: "Sus anécdotas de consultoría en seguridad",
              author: "EstudianteAtento",
              date: "2024-01-15",
              content: "Lo mejor de sus clases son las anécdotas (anonimizadas) sobre sus trabajos de consultoría en seguridad para grandes empresas y gobiernos. Esos casos de estudio reales proporcionan conocimientos que no se encuentran en ningún libro de texto.",
              comments: [
                {
                  author: "AuditorSeguridad",
                  content: "Sus anécdotas sobre auditorías de seguridad física me ayudaron a identificar vulnerabilidades que ningún curso formal había cubierto.",
                  date: "2024-01-16"
                },
                {
                  author: "GrabadorClases",
                  content: "Alguien debería compilar todas sus anécdotas en un libro. Serían lecciones invaluables para profesionales de seguridad en todo el mundo.",
                  date: "2024-01-17"
                },
                {
                  author: "IngenieroCurioso",
                  content: "¿Recuerdan cuando contó sobre aquella empresa que tenía contraseñas pegadas bajo los teclados? Una lección sobre cómo la seguridad más sofisticada puede ser derrotada por malas prácticas básicas.",
                  date: "2024-01-18"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "los-poderes",
      title: "Los superpoderes del profesor Bolio",
      subtopics: [
        {
          id: "tiempo",
          title: "Su dominio sobre el tiempo",
          posts: [
            {
              id: "post1",
              title: "¿Cómo puede estar en dos lugares a la vez?",
              author: "InvestigadorTemporal",
              date: "2024-02-10",
              content: "Varios estudiantes han reportado haber visto al profesor Bolio en dos ubicaciones diferentes exactamente al mismo tiempo. Un día, estaba dando clase en el Edificio A mientras simultáneamente atendía una reunión importante en el Edificio B. Las evidencias fotográficas con marca de tiempo verificada parecen confirmarlo.",
              comments: [
                {
                  author: "FísicoTeórico",
                  content: "Según la teoría de cuerdas, podría estar manipulando dimensiones adicionales de espacio-tiempo para crear lo que parece ser bilocación desde nuestra perspectiva limitada de 4 dimensiones.",
                  date: "2024-02-11"
                },
                {
                  author: "EstudianteConfundido",
                  content: "Una vez le pregunté sobre esto y me sonrió diciendo: 'El tiempo es solo una percepción limitada de una realidad más compleja'. Aún intento entender qué significa.",
                  date: "2024-02-12"
                },
                {
                  author: "InvestigadorCuántico",
                  content: "Podría estar aprovechando principios de entrelazamiento cuántico macroscópico que la ciencia actual considera teóricamente posibles pero prácticamente inalcanzables.",
                  date: "2024-02-13"
                },
                {
                  author: "FilósofoTemporal",
                  content: "La pregunta no es cómo puede estar en dos lugares a la vez, sino cómo el resto de nosotros estamos limitados a uno solo. Quizás él simplemente ha superado las restricciones que aceptamos como normales.",
                  date: "2024-02-14"
                }
              ]
            },
            {
              id: "post2",
              title: "Su agenda imposible y la dilatación temporal",
              author: "GestorTiempoExperto",
              date: "2024-02-15",
              content: "He analizado la agenda del profesor Bolio durante un semestre. Considerando el tiempo de desplazamiento entre ubicaciones y la duración de sus compromisos, necesitaría aproximadamente 36 horas por día para completar todas sus actividades. Sin embargo, lo logra consistentemente sin mostrar signos de fatiga o prisa.",
              comments: [
                {
                  author: "CronobiólogoExperto",
                  content: "He monitorizado discretamente sus patrones de sueño. Aparentemente solo duerme 12 minutos por noche, en dos intervalos de 6 minutos que coinciden con los ciclos lunares.",
                  date: "2024-02-16"
                },
                {
                  author: "IngenieroProcesos",
                  content: "Quizás ha optimizado cada microsegundo de su día con un algoritmo de eficiencia temporal que supera cualquier sistema de productividad conocido.",
                  date: "2024-02-17"
                },
                {
                  author: "EstudianteObservador",
                  content: "¿Han notado que nunca parece apurado? Mientras todos corremos entre clases, él camina tranquilamente y aun así siempre llega antes que todos. Es como si tuviera su propio flujo temporal.",
                  date: "2024-02-18"
                },
                {
                  author: "FísicoRelatividadGeneral",
                  content: "La teoría de la relatividad permite la dilatación temporal. Quizás ha encontrado una forma de manipular su campo gravitacional personal para alterar su experiencia del tiempo relativo al resto del universo.",
                  date: "2024-02-19"
                },
                {
                  author: "NeurocientistaPercepción",
                  content: "Otra posibilidad es que ha maximizado la eficiencia de sus conexiones neuronales, permitiéndole procesar información a velocidades sobrehumanas, creando la ilusión de tener más tiempo.",
                  date: "2024-02-20"
                }
              ]
            },
            {
              id: "post3",
              title: "Predicciones que siempre se cumplen",
              author: "AnalíticaFuturo",
              date: "2024-02-21",
              content: "El profesor Bolio tiene un historial escalofriante de precisión en sus predicciones, desde avances tecnológicos hasta eventos globales y resultados deportivos. Su precisión supera cualquier modelo estadístico o análisis predictivo existente. ¿Podría estar percibiendo el futuro o incluso influyendo en él?",
              comments: [
                {
                  author: "EstadísticoEscéptico",
                  content: "He calculado la probabilidad de acertar tantas predicciones por casualidad. Los números son astronómicamente improbables: 1 en 10^23, aproximadamente la cantidad de estrellas en el universo observable.",
                  date: "2024-02-22"
                },
                {
                  author: "FísicoCausalidad",
                  content: "La física cuántica permite, teóricamente, que la información viaje hacia atrás en el tiempo bajo ciertas condiciones extremas. Quizás ha encontrado una forma de acceder a esos canales informativos.",
                  date: "2024-02-23"
                },
                {
                  author: "EstudianteGanador",
                  content: "Seguí su consejo casual sobre 'un interesante evento deportivo este fin de semana' y aposté todos mis ahorros. Ahora no tengo que preocuparme por el préstamo estudiantil.",
                  date: "2024-02-24"
                },
                {
                  author: "InvestigadorPatrones",
                  content: "Quizás no ve el futuro directamente, sino que su capacidad para procesar variables y detectar patrones es tan avanzada que puede predecir resultados con precisión extrema, como un superordenador cuántico humano.",
                  date: "2024-02-25"
                },
                {
                  author: "FilósofoExistencial",
                  content: "La pregunta más profunda sería: si realmente puede ver el futuro, ¿está observando un futuro predeterminado o creando uno nuevo con cada observación?",
                  date: "2024-02-26"
                }
              ]
            }
          ]
        },
        {
          id: "mente",
          title: "Sus habilidades mentales extraordinarias",
          posts: [
            {
              id: "post1",
              title: "Su memoria fotográfica perfecta",
              author: "NeurocientíficoCognitivo",
              date: "2024-02-27",
              content: "El profesor Bolio posee una memoria eidética (fotográfica) perfecta, sin las limitaciones típicas de esta condición. Puede recordar con precisión absoluta todo lo que ha visto o experimentado, incluyendo páginas enteras de libros leídos décadas atrás, conversaciones palabra por palabra, y cada rostro que ha visto en su vida.",
              comments: [
                {
                  author: "EstudianteAsombrado",
                  content: "Una vez, en medio de una conferencia, citó textualmente un pasaje oscuro de un libro que leyó hace 30 años cuando el autor del libro estaba presente. El autor quedó atónito porque ni él mismo recordaba haberlo escrito.",
                  date: "2024-02-28"
                },
                {
                  author: "InvestigadorMemoria",
                  content: "Las personas con memoria eidética típicamente tienen limitaciones o efectos secundarios negativos. El profesor parece haber superado esas limitaciones, sugiriendo una arquitectura neuronal única.",
                  date: "2024-02-29"
                },
                {
                  author: "EstudianteTravieso",
                  content: "Intenté entregarle un trabajo con dos párrafos idénticos separados por 20 páginas para ver si lo notaría. Me devolvió el trabajo con una nota: 'Interesante experimento. La repetición está en las páginas 4 y 24, párrafo 2.'",
                  date: "2024-03-01"
                },
                {
                  author: "PsicólogoClínico",
                  content: "Lo más impresionante es que esta memoria extraordinaria no parece causarle angustia emocional como suele ocurrir con casos similares. Ha desarrollado mecanismos para gestionar un volumen de recuerdos que abrumaría a la persona promedio.",
                  date: "2024-03-02"
                }
              ]
            },
            {
              id: "post2",
              title: "Su capacidad de aprender cualquier idioma en horas",
              author: "LingüistaInvestigador",
              date: "2024-03-03",
              content: "Según múltiples testimonios, el profesor Bolio puede aprender un nuevo idioma hasta nivel de fluidez nativa en cuestión de horas. Esta habilidad desafía todo lo que sabemos sobre adquisición de lenguaje y plasticidad cerebral. Aparentemente habla más de 50 idiomas con acento y modismos perfectos.",
              comments: [
                {
                  author: "TraductorProfesional",
                  content: "Estuve presente cuando un diplomático mongol visitó la universidad sin traductor. El profesor Bolio se excusó durante 30 minutos y regresó manteniendo una conversación fluida en mongol, incluyendo referencias a poesía antigua que impresionaron al visitante.",
                  date: "2024-03-04"
                },
                {
                  author: "NeurologistaLenguaje",
                  content: "Su cerebro debe tener una configuración única en la región de Broca y Wernicke, posiblemente con conexiones neuronales adicionales que le permiten procesar y reproducir patrones lingüísticos a velocidades sobrehumanas.",
                  date: "2024-03-05"
                },
                {
                  author: "EstudianteInternacional",
                  content: "Cuando llegué de intercambio sin hablar español, me saludó perfectamente en mi idioma nativo (un dialecto muy poco común). Cuando mostré sorpresa, simplemente dijo: 'Me pareció cortés aprender algo nuevo esta mañana'.",
                  date: "2024-03-06"
                },
                {
                  author: "AntigüistaLingüístico",
                  content: "También domina lenguas muertas como el sumerio, el etrusco y variantes extintas del sánscrito. Ha ayudado a descifrar textos que habían confundido a generaciones de especialistas.",
                  date: "2024-03-07"
                },
                {
                  author: "CientíficoCognitivo",
                  content: "La teoría más plausible es que ha desarrollado un meta-marco lingüístico que le permite identificar instantáneamente los patrones estructurales de cualquier lengua y mapearlos a conceptos universales.",
                  date: "2024-03-08"
                }
              ]
            },
            {
              id: "post3",
              title: "Su capacidad para leer pensamientos... ¿o es solo observación avanzada?",
              author: "PsicólogoEscéptico",
              date: "2024-03-09",
              content: "Numerosos estudiantes y colegas han reportado experiencias donde el profesor Bolio parece responder a pensamientos no expresados o anticipar preguntas antes de que sean formuladas. Aunque el escepticismo científico sugeriría una capacidad extraordinaria de lectura de microexpresiones y lenguaje corporal, los testimonios consistentes plantean interrogantes fascinantes.",
              comments: [
                {
                  author: "EstudiantePerplejo",
                  content: "Estaba luchando con un concepto en clase pero tenía demasiado miedo para preguntar. De repente, interrumpió su explicación y abordó exactamente mi duda, mirándome directamente aunque yo estaba en la última fila.",
                  date: "2024-03-10"
                },
                {
                  author: "NeurocientíficoTeórico",
                  content: "Estudios recientes sobre campos electromagnéticos cerebrales sugieren la posibilidad teórica de detectar patrones de pensamiento a distancia con la sensibilidad adecuada. Podría estar percibiendo señales que otros no pueden detectar.",
                  date: "2024-03-11"
                },
                {
                  author: "ComportamientalAnalista",
                  content: "La explicación más científica sería una capacidad de observación llevada al extremo, combinada con inteligencia emocional y deductiva excepcional, creando la ilusión de telepatía cuando realmente es una forma avanzada de empatía cognitiva.",
                  date: "2024-03-12"
                },
                {
                  author: "ProfesoraFilosofía",
                  content: "Le pregunté directamente sobre esto una vez. Sonrió y dijo: 'Todos transmitimos más de lo que creemos. Solo hay que aprender a escuchar con más que los oídos'. Profundo y enigmático, como siempre.",
                  date: "2024-03-13"
                },
                {
                  author: "EstudianteConvencido",
                  content: "Escépticos, expliquen esto: pensé en una secuencia numérica completamente aleatoria durante un examen, y al entregar mi hoja, me susurró exactamente los mismos números al oído. No había forma de que pudiera saberlo.",
                  date: "2024-03-14"
                },
                {
                  author: "FísicoCuánticoTeórico",
                  content: "La física cuántica sugiere que las partículas entrelazadas comparten información instantáneamente. Si nuestros cerebros operan parcialmente a nivel cuántico, como sugieren algunas teorías, podría haber un fundamento para este fenómeno.",
                  date: "2024-03-15"
                }
              ]
            }
          ]
        },
        {
          id: "inexplicables",
          title: "Fenómenos inexplicables en su presencia",
          posts: [
            {
              id: "post1",
              title: "Equipos electrónicos que funcionan sin batería",
              author: "IngenieroPerplejidad",
              date: "2024-03-16",
              content: "Varios testigos han reportado que dispositivos electrónicos con baterías completamente agotadas vuelven a funcionar temporalmente cuando el profesor Bolio los toca o simplemente está cerca de ellos. Este fenómeno desafía los principios fundamentales de la conservación de energía y electromagnetismo.",
              comments: [
                {
                  author: "EstudianteDesesperado",
                  content: "Mi laptop se apagó en medio de un examen porque olvidé cargarla. El profesor pasó junto a mi mesa, la tocó casualmente, y volvió a encenderse con un 30% de batería. Pude terminar mi examen.",
                  date: "2024-03-17"
                },
                {
                  author: "FísicoEnergía",
                  content: "Podría estar generando un campo electromagnético altamente específico y controlado, induciendo corriente en los circuitos de carga de los dispositivos. Teóricamente posible, pero requeriría un control fisiológico sin precedentes.",
                  date: "2024-03-18"
                },
                {
                  author: "IngenieroEscéptico",
                  content: "He intentado documentar este fenómeno con equipos de medición, pero curiosamente, las cámaras y sensores tienden a fallar cuando intento registrarlo. Casi como si el fenómeno evitara ser documentado.",
                  date: "2024-03-19"
                },
                {
                  author: "BiofísicoTeórico",
                  content: "El cuerpo humano genera electricidad, pero no en cantidades remotamente suficientes para este efecto. Debe estar canalizando o transformando energía de alguna fuente no convencional.",
                  date: "2024-03-20"
                },
                {
                  author: "EstudianteAgradecido",
                  content: "No sé cómo funciona, pero desde que el profesor Bolio tocó mi teléfono viejo, la batería dura tres días más que antes. El efecto parece ser permanente en mi caso.",
                  date: "2024-03-21"
                }
              ]
            },
            {
              id: "post2",
              title: "Plantas que crecen más rápido en su presencia",
              author: "BotánicoAsombrado",
              date: "2024-03-22",
              content: "Como parte de un experimento controlado, he documentado que las plantas en presencia del profesor Bolio crecen aproximadamente un 320% más rápido que sus contrapartes en condiciones idénticas. Además, desarrollan propiedades inusuales como mayor resistencia a enfermedades y adaptabilidad a entornos hostiles.",
              comments: [
                {
                  author: "BioquímicoVegetal",
                  content: "He analizado muestras de estas plantas. Muestran modificaciones en su estructura celular y expresión genética que normalmente requerirían generaciones de evolución selectiva.",
                  date: "2024-03-23"
                },
                {
                  author: "JardineroUniversidad",
                  content: "El jardín frente a su oficina florece todo el año, incluso durante heladas severas. Y las plantas nunca parecen necesitar agua adicional, como si optimizaran su metabolismo.",
                  date: "2024-03-24"
                },
                {
                  author: "AgrónomoInvestigador",
                  content: "Si pudiéramos entender y replicar este efecto, revolucionaríamos la agricultura global y podríamos abordar problemas de seguridad alimentaria en regiones áridas.",
                  date: "2024-03-25"
                },
                {
                  author: "BiofísicoAmbiental",
                  content: "Teoría: podría estar alterando sutilmente el campo electromagnético local, estimulando los procesos bioelectroquímicos de las plantas de una manera análoga a técnicas avanzadas de agricultura.",
                  date: "2024-03-26"
                },
                {
                  author: "EstudianteBotánica",
                  content: "Le regalé una planta que los expertos consideraban imposible de cultivar en nuestro clima. No solo sobrevivió, sino que floreció y desarrolló propiedades medicinales que no están documentadas en la literatura científica.",
                  date: "2024-03-27"
                }
              ]
            },
            {
              id: "post3",
              title: "Meteorología localizada: nunca se moja con la lluvia",
              author: "MeteorólogoPerplejo",
              date: "2024-03-28",
              content: "Múltiples observaciones confirman un fenómeno meteorológico inexplicable: el profesor Bolio nunca se moja cuando llueve, incluso caminando por tormentas intensas sin paraguas. No es que el agua rebote en él; parece más bien que las gotas alteran su trayectoria para evitarlo, creando un espacio seco a su alrededor.",
              comments: [
                {
                  author: "FísicoDinámicaFluidos",
                  content: "He grabado este fenómeno con cámara de alta velocidad. Las gotas de lluvia efectivamente cambian su vector de caída cuando se acercan a aproximadamente 15 cm de su cuerpo, violando leyes básicas de la dinámica de fluidos.",
                  date: "2024-03-29"
                },
                {
                  author: "EstudianteMojado",
                  content: "Caminé junto a él durante un aguacero repentino. Terminé empapado mientras él llegó perfectamente seco al aula. Ni siquiera los zapatos estaban húmedos.",
                  date: "2024-03-30"
                },
                {
                  author: "InvestigadorCampoUnificado",
                  content: "Podría estar generando inconscientemente un campo de fuerza microscópica: no suficientemente fuerte para afectar objetos sólidos, pero suficiente para desviar moléculas de agua.",
                  date: "2024-03-31"
                },
                {
                  author: "TermodinámicaExperto",
                  content: "Otra posibilidad es la manipulación localizada de gradientes de temperatura, creando corrientes ascendentes invisibles que evaporan el agua antes del contacto.",
                  date: "2024-04-01"
                },
                {
                  author: "ExEstudianteOportuno",
                  content: "Durante una graduación al aire libre, una tormenta amenazaba con arruinar la ceremonia. Curiosamente, mientras él daba su discurso, la lluvia cayó intensamente alrededor del campo, formando casi un círculo perfecto de sequedad sobre todos nosotros.",
                  date: "2024-04-02"
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default forumData;