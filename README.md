# Foro del Profesor Bolio

Este proyecto es una aplicación Next.js que implementa un foro dedicado al profesor Bolio. Está contenerizado con Docker, usa MariaDB como base de datos, y expone una API RESTful para acceder a los datos.

## Características

- Foro completo con temas, subtemas, posts y comentarios
- Estilo personalizado con tema oscuro
- Navegación intuitiva
- Base de datos MariaDB para almacenamiento persistente
- API RESTful para acceder a los datos
- Contenerización completa con Docker y Docker Compose

## Estructura del Proyecto

```
forum-bolio/
├── app/
│   ├── api/                 # API routes
│   │   ├── topics/
│   │   ├── topic/
│   │   └── subtopic/
│   ├── components/          # React components
│   ├── lib/                 # Utilidades (conexión a DB)
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── [mainTopic]/
│   │   └── [subtopic]/
│   │       └── page.js
├── db/                      # Base de datos
│   └── init/                # Scripts de inicialización
│       └── 01-schema.sql
├── public/
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
└── README.md
```

## Requisitos

- Docker
- Docker Compose

## Instalación y Ejecución

1. Clona este repositorio
2. Navega al directorio del proyecto

### Usando Docker Compose (recomendado)

```bash
docker-compose up
```

Esto construirá la imagen, iniciará el contenedor con la aplicación Next.js y creará una instancia de MariaDB con los datos iniciales.

### Primera ejecución

La primera vez que ejecutes el proyecto, la base de datos se inicializará automáticamente con los datos de ejemplo. El script `db/init/01-schema.sql` se ejecutará para crear las tablas y llenarlas con datos iniciales.

## Acceso a la aplicación

Una vez iniciado, accede a la aplicación en tu navegador:

```
http://localhost:3000
```

## API Endpoints

El proyecto expone los siguientes endpoints de API:

- `GET /api/topics` - Obtiene todos los temas y subtemas del foro
- `GET /api/topic/[mainTopic]` - Obtiene un tema específico y sus subtemas
- `GET /api/subtopic/[mainTopic]/[subtopic]` - Obtiene un subtema específico con sus posts y comentarios

## Arquitectura Técnica

### Frontend

- Next.js 14 con App Router
- React para componentes de UI
- SWR para manejo de estado y caché de datos

### Backend

- API Routes de Next.js para endpoints RESTful
- MariaDB como motor de base de datos
- MySQL2 para conexión a la base de datos

### Containerización

- Docker para contenedores individuales
- Docker Compose para orquestar múltiples servicios
- Volúmenes para persistencia de datos

## Desarrollo

Para desarrollo, los contenedores están configurados con volúmenes que permiten reflejar los cambios en tiempo real. Simplemente modifica los archivos en tu editor favorito y verás los cambios automáticamente.

## Notas sobre Docker

El proyecto incluye:

- Un `Dockerfile` optimizado para producción
- Un archivo `docker-compose.yml` con configuración para desarrollo
- Un archivo `.dockerignore` para excluir archivos innecesarios

## Licencia

Este proyecto está bajo la Licencia MIT.