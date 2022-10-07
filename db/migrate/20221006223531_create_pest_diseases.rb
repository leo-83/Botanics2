class CreatePestDiseases < ActiveRecord::Migration[7.0]
  def change
    create_table :pest_diseases do |t|

      t.timestamps
    end
  end
end
