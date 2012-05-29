class CreatePipelines < ActiveRecord::Migration
  def change
    create_table :pipelines do |t|
      t.text :name, :null => false
      t.timestamps
    end

    add_index :pipelines, :name, :unique => true
  end
end
