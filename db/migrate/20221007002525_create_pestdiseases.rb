class CreatePestdiseases < ActiveRecord::Migration[7.0]
  def change
    create_table :pestdiseases do |t|
      t.belongs_to :plant, null: false, foreign_key: true
      t.string :name
      t.string :pdate
      t.string :problem
      t.string :treatment

      t.timestamps
    end
  end
end
