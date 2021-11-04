import axiosInstance from './axiosInstance'

const commentsAPI = {
  getByProjectAndSlug(projectId,slug) {
    return axiosInstance.get(`/gk/comments/${projectId}/${slug}`)
  },
  patch(projectId, slug, data) {
    return axiosInstance.patch(`/gk/comments/${projectId}/${slug}`, data)
  },
}

export default commentsAPI