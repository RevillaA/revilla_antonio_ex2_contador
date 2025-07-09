# Proyecto Angular - Contador de Velocidad Dockerizado

Este documento describe los pasos para construir, listar y ejecutar el contenedor Docker para la aplicación Angular `revilla_antonio_ex2_contador`.

---

## 1. Construir la imagen Docker

Desde la raíz del proyecto (donde está el Dockerfile), ejecuta:

```bash
docker build -t revilla_antonio_ex2_contador:v1 .
```

---
## 2. Crear el contenedor con la imagen
```bash
docker run -dit -p 8080:80 --name c-contador --rm revilla_antonio_ex2_contador:v1
```

---
## 3. Cargar la imagen

### Etiquetar la imagen
```bash
docker image tag revilla_antonio_ex2_contador:v1 antonio215/web-revilla-antonio:v1
```

```bash
docker pull <usuario-dockerhub>/web-revilla-antonio:v1

docker push antonio215/web-revilla-antonio:v1
```
