class Post < ApplicationRecord
  has_many :comments, as: :commentable
  has_rich_text :content

  scope :search_scope, ->(query) { where("title LIKE ?", "%#{query}%") }

  def like!
    increment!(:likes_count)
  end
end
