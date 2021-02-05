class TaskSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :description, :completed, :completed_at, :avatar

  def avatar
    rails_blob_url(object.avatar) if object.avatar.attached?
  end
end
