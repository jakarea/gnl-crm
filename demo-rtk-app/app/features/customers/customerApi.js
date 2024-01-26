import { apiSlice } from "../api/apiSlice";

export const customerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query({
            query: () => '/customers',
        }),
        getCustomers: builder.query({
            query: (id) => `/customers/${id}`,
        }),
        addCustomers: builder.mutation({
            query: (formData) => ({
                url: "/customers",
                method: "POST",
                body: formData,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: customer } = await queryFulfilled;

                    dispatch(
                        apiSlice.util.updateQueryData("getCustomers", undefined, (draft) => {
                            draft.push(customer);
                        })
                    );

                } catch (error) {
                    console.log(error);
                }
            }
        }),
        editcustomer: builder.mutation({
            query: ({ id, data }) => ({
                url: `/customers/${id}`,
                method: "PATCH",
                body: data,
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: customer } = await queryFulfilled;

                    dispatch(
                        apiSlice.util.updateQueryData("getCustomer", arg.id, (draft) => {
                            return customer;
                        })
                    );

                    dispatch(
                        apiSlice.util.updateQueryData("getCustomers", undefined, (draft) => {
                            return draft.map((item) => (item.id === customer.id ? customer : item));
                        })
                    );

                } catch (error) {

                }
            }
        }),
        deletecustomer: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE"
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getCustomers", undefined, (draft) => {
                        return draft.filter((item) => item.id !== arg);
                    })
                );

                try {
                    await queryFulfilled;

                } catch (error) {
                    patchResult.undo();
                }
            }
        }),
    }),
});

export const { useGetCustomersQuery, useGetCustomerQuery, useAddCustomerMutation, useEditCustomerMutation, useDeleteCustomerMutation } = customerApi;