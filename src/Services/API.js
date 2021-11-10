import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//------------------------------------------------------------------------

export const contactsApi = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6185930523a2fe0017fff699.mockapi.io/',
  }),
  tagTypes: ['contacts'],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `Contacts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'contacts', id })),
              { type: 'contacts', id: 'LIST' },
            ]
          : [{ type: 'contacts', id: 'LIST' }],
    }),

    addContact: build.mutation({
      query: (body) => ({
        url: '/Contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),

    deleteContact: build.mutation({
      query: (id) => ({
        url: `/Contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),
  }),
});

//------------------------------------------------------------------------
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
//------------------------------------------------------------------------
