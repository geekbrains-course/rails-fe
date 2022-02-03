class RemovePostRefFromRef < ActiveRecord::Migration[6.1]
  def change
    remove_reference :comments, :post, index: true, foreign_key: true
  end
end
