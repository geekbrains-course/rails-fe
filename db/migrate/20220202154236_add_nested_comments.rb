class AddNestedComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :commentable, polymorphic: true, index: true
  end
end
