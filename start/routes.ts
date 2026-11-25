/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/index').as('index')
router.on('/certifications').render('pages/certifications').as('certifications')
router.on('/projects').render('pages/projects').as('projects')
router.on('/imdress').render('pages/imdress').as('imdress')
router.on('/dtod').render('pages/dtod').as('dtod')
router.on('/dd').render('pages/dd').as('dd')
router.on('/certi').render('pages/certi').as('certi')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.on('/dashboard').render('pages/dashboard').as('dashboard')
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())
