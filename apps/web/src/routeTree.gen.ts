/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NotFoundImport } from './routes/not-found'
import { Route as GraphqlTestImport } from './routes/graphql-test'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthRegisterImport } from './routes/auth.register'
import { Route as AuthLoginImport } from './routes/auth.login'
import { Route as AuthAppImport } from './routes/_auth.app'
import { Route as AuthGithubCallbackImport } from './routes/auth.github.callback'
import { Route as AuthAppChannelsMeImport } from './routes/_auth.app.channels.me'
import { Route as AuthAppChannelsMeFriendIdImport } from './routes/_auth.app.channels.me.$friendId'

// Create/Update Routes

const NotFoundRoute = NotFoundImport.update({
  path: '/not-found',
  getParentRoute: () => rootRoute,
} as any)

const GraphqlTestRoute = GraphqlTestImport.update({
  path: '/graphql-test',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthAppRoute = AuthAppImport.update({
  path: '/app',
  getParentRoute: () => AuthRoute,
} as any)

const AuthGithubCallbackRoute = AuthGithubCallbackImport.update({
  path: '/auth/github/callback',
  getParentRoute: () => rootRoute,
} as any)

const AuthAppChannelsMeRoute = AuthAppChannelsMeImport.update({
  path: '/channels/me',
  getParentRoute: () => AuthAppRoute,
} as any)

const AuthAppChannelsMeFriendIdRoute = AuthAppChannelsMeFriendIdImport.update({
  path: '/$friendId',
  getParentRoute: () => AuthAppChannelsMeRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/graphql-test': {
      id: '/graphql-test'
      path: '/graphql-test'
      fullPath: '/graphql-test'
      preLoaderRoute: typeof GraphqlTestImport
      parentRoute: typeof rootRoute
    }
    '/not-found': {
      id: '/not-found'
      path: '/not-found'
      fullPath: '/not-found'
      preLoaderRoute: typeof NotFoundImport
      parentRoute: typeof rootRoute
    }
    '/_auth/app': {
      id: '/_auth/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AuthAppImport
      parentRoute: typeof AuthImport
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/auth/github/callback': {
      id: '/auth/github/callback'
      path: '/auth/github/callback'
      fullPath: '/auth/github/callback'
      preLoaderRoute: typeof AuthGithubCallbackImport
      parentRoute: typeof rootRoute
    }
    '/_auth/app/channels/me': {
      id: '/_auth/app/channels/me'
      path: '/channels/me'
      fullPath: '/app/channels/me'
      preLoaderRoute: typeof AuthAppChannelsMeImport
      parentRoute: typeof AuthAppImport
    }
    '/_auth/app/channels/me/$friendId': {
      id: '/_auth/app/channels/me/$friendId'
      path: '/$friendId'
      fullPath: '/app/channels/me/$friendId'
      preLoaderRoute: typeof AuthAppChannelsMeFriendIdImport
      parentRoute: typeof AuthAppChannelsMeImport
    }
  }
}

// Create and export the route tree

interface AuthAppChannelsMeRouteChildren {
  AuthAppChannelsMeFriendIdRoute: typeof AuthAppChannelsMeFriendIdRoute
}

const AuthAppChannelsMeRouteChildren: AuthAppChannelsMeRouteChildren = {
  AuthAppChannelsMeFriendIdRoute: AuthAppChannelsMeFriendIdRoute,
}

const AuthAppChannelsMeRouteWithChildren =
  AuthAppChannelsMeRoute._addFileChildren(AuthAppChannelsMeRouteChildren)

interface AuthAppRouteChildren {
  AuthAppChannelsMeRoute: typeof AuthAppChannelsMeRouteWithChildren
}

const AuthAppRouteChildren: AuthAppRouteChildren = {
  AuthAppChannelsMeRoute: AuthAppChannelsMeRouteWithChildren,
}

const AuthAppRouteWithChildren =
  AuthAppRoute._addFileChildren(AuthAppRouteChildren)

interface AuthRouteChildren {
  AuthAppRoute: typeof AuthAppRouteWithChildren
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthAppRoute: AuthAppRouteWithChildren,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/graphql-test': typeof GraphqlTestRoute
  '/not-found': typeof NotFoundRoute
  '/app': typeof AuthAppRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/auth/github/callback': typeof AuthGithubCallbackRoute
  '/app/channels/me': typeof AuthAppChannelsMeRouteWithChildren
  '/app/channels/me/$friendId': typeof AuthAppChannelsMeFriendIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/graphql-test': typeof GraphqlTestRoute
  '/not-found': typeof NotFoundRoute
  '/app': typeof AuthAppRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/auth/github/callback': typeof AuthGithubCallbackRoute
  '/app/channels/me': typeof AuthAppChannelsMeRouteWithChildren
  '/app/channels/me/$friendId': typeof AuthAppChannelsMeFriendIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/graphql-test': typeof GraphqlTestRoute
  '/not-found': typeof NotFoundRoute
  '/_auth/app': typeof AuthAppRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/auth/github/callback': typeof AuthGithubCallbackRoute
  '/_auth/app/channels/me': typeof AuthAppChannelsMeRouteWithChildren
  '/_auth/app/channels/me/$friendId': typeof AuthAppChannelsMeFriendIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/graphql-test'
    | '/not-found'
    | '/app'
    | '/auth/login'
    | '/auth/register'
    | '/auth/github/callback'
    | '/app/channels/me'
    | '/app/channels/me/$friendId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/graphql-test'
    | '/not-found'
    | '/app'
    | '/auth/login'
    | '/auth/register'
    | '/auth/github/callback'
    | '/app/channels/me'
    | '/app/channels/me/$friendId'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/graphql-test'
    | '/not-found'
    | '/_auth/app'
    | '/auth/login'
    | '/auth/register'
    | '/auth/github/callback'
    | '/_auth/app/channels/me'
    | '/_auth/app/channels/me/$friendId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  GraphqlTestRoute: typeof GraphqlTestRoute
  NotFoundRoute: typeof NotFoundRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
  AuthGithubCallbackRoute: typeof AuthGithubCallbackRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  GraphqlTestRoute: GraphqlTestRoute,
  NotFoundRoute: NotFoundRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
  AuthGithubCallbackRoute: AuthGithubCallbackRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/graphql-test",
        "/not-found",
        "/auth/login",
        "/auth/register",
        "/auth/github/callback"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/app"
      ]
    },
    "/graphql-test": {
      "filePath": "graphql-test.tsx"
    },
    "/not-found": {
      "filePath": "not-found.tsx"
    },
    "/_auth/app": {
      "filePath": "_auth.app.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/app/channels/me"
      ]
    },
    "/auth/login": {
      "filePath": "auth.login.tsx"
    },
    "/auth/register": {
      "filePath": "auth.register.tsx"
    },
    "/auth/github/callback": {
      "filePath": "auth.github.callback.tsx"
    },
    "/_auth/app/channels/me": {
      "filePath": "_auth.app.channels.me.tsx",
      "parent": "/_auth/app",
      "children": [
        "/_auth/app/channels/me/$friendId"
      ]
    },
    "/_auth/app/channels/me/$friendId": {
      "filePath": "_auth.app.channels.me.$friendId.tsx",
      "parent": "/_auth/app/channels/me"
    }
  }
}
ROUTE_MANIFEST_END */
