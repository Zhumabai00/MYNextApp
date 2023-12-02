import { IPosts } from '@/models/IPosts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const PostsApi = createApi({
	reducerPath: 'PostsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
	// tagTypes: ['Messages'],
	endpoints: (build) => ({
		getPosts: build.query<IPosts[], string>({
			query: () => '/posts',
			// providesTags: ['Messages'],
		})
	})
})

export const { useGetPostsQuery } = PostsApi
