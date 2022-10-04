class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :img
      t.text :desc

      t.timestamps
    end
  end
end
