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
import { Route as AppChannelsImport } from './routes/app.channels'
import { Route as AuthAppImport } from './routes/_auth.app'
import { Route as AppChannelsServerIdImport } from './routes/app.channels.$serverId'
import { Route as AppChannelsServerIdChannelIdImport } from './routes/app.channels.$serverId.$channelId'
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

const AppChannelsRoute = AppChannelsImport.update({
  path: '/app/channels',
  getParentRoute: () => rootRoute,
} as any)

const AuthAppRoute = AuthAppImport.update({
  path: '/app',
  getParentRoute: () => AuthRoute,
} as any)

const AppChannelsServerIdRoute = AppChannelsServerIdImport.update({
  path: '/$serverId',
  getParentRoute: () => AppChannelsRoute,
} as any)

const AppChannelsServerIdChannelIdRoute =
  AppChannelsServerIdChannelIdImport.update({
    path: '/$channelId',
    getParentRoute: () => AppChannelsServerIdRoute,
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
    '/app/channels': {
      id: '/app/channels'
      path: '/app/channels'
      fullPath: '/app/channels'
      preLoaderRoute: typeof AppChannelsImport
      parentRoute: typeof rootRoute
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
    '/app/channels/$serverId': {
      id: '/app/channels/$serverId'
      path: '/$serverId'
      fullPath: '/app/channels/$serverId'
      preLoaderRoute: typeof AppChannelsServerIdImport
      parentRoute: typeof AppChannelsImport
    }
    '/_auth/app/channels/me': {
      id: '/_auth/app/channels/me'
      path: '/channels/me'
      fullPath: '/app/channels/me'
      preLoaderRoute: typeof AuthAppChannelsMeImport
      parentRoute: typeof AuthAppImport
    }
    '/app/channels/$serverId/$channelId': {
      id: '/app/channels/$serverId/$channelId'
      path: '/$channelId'
      fullPath: '/app/channels/$serverId/$channelId'
      preLoaderRoute: typeof AppChannelsServerIdChannelIdImport
      parentRoute: typeof AppChannelsServerIdImport
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

interface AppChannelsServerIdRouteChildren {
  AppChannelsServerIdChannelIdRoute: typeof AppChannelsServerIdChannelIdRoute
}

const AppChannelsServerIdRouteChildren: AppChannelsServerIdRouteChildren = {
  AppChannelsServerIdChannelIdRoute: AppChannelsServerIdChannelIdRoute,
}

const AppChannelsServerIdRouteWithChildren =
  AppChannelsServerIdRoute._addFileChildren(AppChannelsServerIdRouteChildren)

interface AppChannelsRouteChildren {
  AppChannelsServerIdRoute: typeof AppChannelsServerIdRouteWithChildren
}

const AppChannelsRouteChildren: AppChannelsRouteChildren = {
  AppChannelsServerIdRoute: AppChannelsServerIdRouteWithChildren,
}

const AppChannelsRouteWithChildren = AppChannelsRoute._addFileChildren(
  AppChannelsRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/graphql-test': typeof GraphqlTestRoute
  '/not-found': typeof NotFoundRoute
  '/app': typeof AuthAppRouteWithChildren
  '/app/channels': typeof AppChannelsRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/app/channels/$serverId': typeof AppChannelsServerIdRouteWithChildren
  '/app/channels/me': typeof AuthAppChannelsMeRouteWithChildren
  '/app/channels/$serverId/$channelId': typeof AppChannelsServerIdChannelIdRoute
  '/app/channels/me/$friendId': typeof AuthAppChannelsMeFriendIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthRouteWithChildren
  '/graphql-test': typeof GraphqlTestRoute
  '/not-found': typeof NotFoundRoute
  '/app': typeof AuthAppRouteWithChildren
  '/app/channels': typeof AppChannelsRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/app/channels/$serverId': typeof AppChannelsServerIdRouteWithChildren
  '/app/channels/me': typeof AuthAppChannelsMeRouteWithChildren
  '/app/channels/$serverId/$channelId': typeof AppChannelsServerIdChannelIdRoute
  '/app/channels/me/$friendId': typeof AuthAppChannelsMeFriendIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_auth': typeof AuthRouteWithChildren
  '/graphql-test': typeof GraphqlTestRoute
  '/not-found': typeof NotFoundRoute
  '/_auth/app': typeof AuthAppRouteWithChildren
  '/app/channels': typeof AppChannelsRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/app/channels/$serverId': typeof AppChannelsServerIdRouteWithChildren
  '/_auth/app/channels/me': typeof AuthAppChannelsMeRouteWithChildren
  '/app/channels/$serverId/$channelId': typeof AppChannelsServerIdChannelIdRoute
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
    | '/app/channels'
    | '/auth/login'
    | '/auth/register'
    | '/app/channels/$serverId'
    | '/app/channels/me'
    | '/app/channels/$serverId/$channelId'
    | '/app/channels/me/$friendId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/graphql-test'
    | '/not-found'
    | '/app'
    | '/app/channels'
    | '/auth/login'
    | '/auth/register'
    | '/app/channels/$serverId'
    | '/app/channels/me'
    | '/app/channels/$serverId/$channelId'
    | '/app/channels/me/$friendId'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/graphql-test'
    | '/not-found'
    | '/_auth/app'
    | '/app/channels'
    | '/auth/login'
    | '/auth/register'
    | '/app/channels/$serverId'
    | '/_auth/app/channels/me'
    | '/app/channels/$serverId/$channelId'
    | '/_auth/app/channels/me/$friendId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRouteWithChildren
  GraphqlTestRoute: typeof GraphqlTestRoute
  NotFoundRoute: typeof NotFoundRoute
  AppChannelsRoute: typeof AppChannelsRouteWithChildren
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRouteWithChildren,
  GraphqlTestRoute: GraphqlTestRoute,
  NotFoundRoute: NotFoundRoute,
  AppChannelsRoute: AppChannelsRouteWithChildren,
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
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
        "/app/channels",
        "/auth/login",
        "/auth/register"
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
    "/app/channels": {
      "filePath": "app.channels.tsx",
      "children": [
        "/app/channels/$serverId"
      ]
    },
    "/auth/login": {
      "filePath": "auth.login.tsx"
    },
    "/auth/register": {
      "filePath": "auth.register.tsx"
    },
    "/app/channels/$serverId": {
      "filePath": "app.channels.$serverId.tsx",
      "parent": "/app/channels",
      "children": [
        "/app/channels/$serverId/$channelId"
      ]
    },
    "/_auth/app/channels/me": {
      "filePath": "_auth.app.channels.me.tsx",
      "parent": "/_auth/app",
      "children": [
        "/_auth/app/channels/me/$friendId"
      ]
    },
    "/app/channels/$serverId/$channelId": {
      "filePath": "app.channels.$serverId.$channelId.tsx",
      "parent": "/app/channels/$serverId"
    },
    "/_auth/app/channels/me/$friendId": {
      "filePath": "_auth.app.channels.me.$friendId.tsx",
      "parent": "/_auth/app/channels/me"
    }
  }
}
ROUTE_MANIFEST_END */
