# Foro del Profesor Bolio

Este proyecto es una aplicación Next.js que implementa un foro dedicado al profesor Bolio. Está contenerizado con Docker, usa MariaDB como base de datos, y expone una API RESTful para acceder a los datos.

## Requisitos

- Docker
- Docker Compose

## Instalación y Ejecución

1. Clona este repositorio
2. Navega al directorio del proyecto

### Usando Docker Compose (recomendado)

```bash
docker-compose up --build
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

## Desarrollo

Para desarrollo, los contenedores están configurados con volúmenes que permiten reflejar los cambios en tiempo real. Simplemente modifica los archivos en tu editor favorito y verás los cambios automáticamente.

## Notas sobre Docker

El proyecto incluye:

- Un `Dockerfile` optimizado para producción
- Un archivo `docker-compose.yml` con configuración para desarrollo
- Un archivo `.dockerignore` para excluir archivos innecesarios

## Licencia

Este proyecto está bajo la Licencia MIT.