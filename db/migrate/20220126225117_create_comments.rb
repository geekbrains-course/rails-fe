class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :author, comment: "Comment's author"
      t.text :text, comment: "Comment's body"
      t.references :post, null: false, foreign_key: true, comment: "Commented post"

      t.timestamps
    end
  end
end
