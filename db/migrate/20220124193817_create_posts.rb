class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title, comment: "Post's title"
      t.text :content, comment: "Post's body"

      t.timestamps
    end
  end
end
