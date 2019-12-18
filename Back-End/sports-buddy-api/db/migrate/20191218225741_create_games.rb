class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :location
      t.date :time
      t.string :score
      t.string :sport
      t.boolean :accepted
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
