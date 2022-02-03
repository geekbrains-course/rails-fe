class Post < ApplicationRecord
  has_many :comments, as: :commentable
  has_rich_text :content

  def like!
    increment!(:likes_count)
  end
end
