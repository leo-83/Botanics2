class CreatePropogations < ActiveRecord::Migration[7.0]
  def change
    create_table :propogations do |t|
      t.string :name
      t.string :method
      t.string :pdate
      t.string :results
      t.belongs_to :plant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
