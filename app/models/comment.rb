class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  has_many :comments, as: :commentable

  scope :post_comments, -> { where(commentable_type: "Post") }
end
