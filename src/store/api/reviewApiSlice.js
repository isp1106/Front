import { apiSlice } from './baseQuery'

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getReviews: builder.query({
      query: () => 'customers/reviews',
    }),
    getProductReviews: builder.query({
      query: (id) => `/products/${id}/reviews`,
    }),
    getProductReviewsCount: builder.query({
      query: (id) => `/products/${id}/review-count`,
    }),
    getMyReviews: builder.query({
      query: () => 'customers/reviews/my',
    }),
    addProductReview: builder.mutation({
      query: (data) => {
        console.log(data, 'here')
        return {
          url: `/customers/reviews/1`,
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: data,
        }
      },
    }),
  }),
})

export const {
  useGetMyReviewsQuery,
  useGetReviewsQuery,
  useGetProductReviewsCountQuery,
  useGetProductReviewsQuery,
  useAddProductReviewMutation,
} = reviewApi
