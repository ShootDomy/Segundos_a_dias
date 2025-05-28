# ⏱️ Segundos a Horas

Segundos_a_dias (nombre del repositorio) es un proyecto simple en TypeScript que permite convertir una cantidad de segundos ingresada por el usuario a su equivalente en horas completas. Es un ejercicio básico ideal para practicar operaciones matemáticas y trabajar con entradas y salidas de datos en consola.

## 🧠 ¿Cómo funciona?

El programa solicita al usuario que ingrese una cantidad de segundos y luego calcula cuántas horas completas representan esos segundos. Utiliza la fórmula:

```yaml
1 hora = 3600 segundos
```

## 📁 Estructura del proyecto

```bash
├── segundosDias.ts       # Contiene la lógica para convertir segundos a horas
├── prueba.ts             # Pruebas simples del funcionamiento
├── tsconfig.json         # Configuración del compilador TypeScript
├── package.json          # Dependencias y scripts del proyecto
├── eslint.config.mjs     # Configuración de ESLint
├── .gitignore            # Archivos ignorados por Git
```

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/ShootDomy/Segundos_a_dias.git
cd Segundos_a_dias

```

2. Instala las dependencias:

```bash
npm install
```

3. Compila el código TypeScript:

```bash
npx tsc
```

4. Ejecuta el archivo compilado:

```bash
node segundosDias.js

```

Asegúrate de tener TypeScript instalado globalmente o usar npx tsc para compilar.

## 🧪 Ejemplo de uso

Si el usuario ingresa 7200 segundos, el programa calculará:

```yaml
7200 / 3600 = 2 horas
```

Y mostrará:

```yaml
2 hours
```
