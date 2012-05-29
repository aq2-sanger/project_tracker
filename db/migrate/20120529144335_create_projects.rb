class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.text :marker_symbol, :null => false
      t.date :not_targeted_date, :null => false
      t.date :targeting_in_progress_date
      t.date :targeting_complete_date
      t.references :pipeline

      t.timestamps
    end
  end
end
