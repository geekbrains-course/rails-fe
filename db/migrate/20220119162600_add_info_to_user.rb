class AddInfoToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :info, :string, comment: 'Rich Text user info'
  end
end
