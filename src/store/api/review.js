import { apiSlice } from '../api/baseQuery'

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getReviews: builder.query({
      query: () => 'customers/reviews',
    }),
    getMyReviews: builder.query({
      query: (id) => `/products/${id}/reviews`,
    }),
    getProductReviews: builder.query({
      query: () => 'customers/reviews/my',
    }),
  }),
})

export const {
  useGetMyReviewsQuery,
  useGetReviewsQuery,
  useGetProductReviewsQuery,
} = reviewApi
