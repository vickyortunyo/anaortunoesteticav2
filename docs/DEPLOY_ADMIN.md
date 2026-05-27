# Despliegue del panel de administración en producción

El admin forma parte de la misma aplicación Angular que la web pública. No hay un despliegue separado: al publicar la web en GitHub Pages, las rutas `/login` y `/admin` quedan disponibles.

## URLs en producción

| Ruta | Uso |
|------|-----|
| `https://anaortunoestetica.es/login` | Inicio de sesión |
| `https://anaortunoestetica.es/admin` | Panel de precios (requiere login) |

## Checklist antes del primer uso

### 1. Firebase Authentication

1. Entra en [Firebase Console](https://console.firebase.google.com/) → proyecto **anaortunowebestetica**.
2. **Authentication** → **Sign-in method** → activa **Correo electrónico/Contraseña**.
3. **Authentication** → **Users** → **Add user**: crea el correo y contraseña del administrador.
4. **Authentication** → **Settings** → **Authorized domains**: asegúrate de que figuren:
   - `anaortunoestetica.es`
   - `www.anaortunoestetica.es`
   - `localhost` (solo desarrollo)
   - Si usas la URL de GitHub Pages sin dominio propio: `vickyortunyo.github.io`

### 2. Reglas de Firestore

Desde la raíz del proyecto (con [Firebase CLI](https://firebase.google.com/docs/cli) instalada y `firebase login` hecho):

```bash
npm run deploy:rules
```

Esto publica `firestore.rules`:

- **Lectura** de `prices/*`: pública (la web muestra precios).
- **Escritura** de `prices/*`: solo usuarios autenticados (admin).

### 3. Publicar la web (incluye admin)

Al hacer **push a `main`**, el workflow `.github/workflows/gh-pages.yml` construye y despliega automáticamente.

Despliegue manual local:

```bash
npm ci
npm run build
# Sube el contenido de dist/beauty-app/browser a tu hosting
```

El script `postbuild` genera `404.html` para que GitHub Pages sirva bien las rutas `/login` y `/admin` al recargar la página.

## Comprobar que todo funciona

1. Abre `https://anaortunoestetica.es/login`.
2. Inicia sesión con el usuario creado en Firebase.
3. Deberías entrar en `/admin`, ver los tratamientos y poder guardar un precio.
4. Comprueba en la web pública que el precio actualizado se muestra.

## Problemas frecuentes

| Síntoma | Causa habitual | Solución |
|---------|----------------|----------|
| Error al iniciar sesión | Dominio no autorizado en Firebase | Añadir el dominio en Authorized domains |
| Error al guardar precio | Reglas Firestore restrictivas | `npm run deploy:rules` |
| `/admin` da 404 al recargar | Falta `404.html` en el deploy | Volver a ejecutar `npm run build` (incluye postbuild) |
| Pantalla en blanco en admin | Firebase no configurado en build prod | Usar `environment.prod.ts` con `firebase` (ya configurado) |

## Seguridad

- No enlaces `/login` desde la web pública (ya está en `robots.txt` como `Disallow`).
- Usa una contraseña fuerte solo para el admin.
- Los precios en Firestore solo pueden modificarlos usuarios autenticados.
