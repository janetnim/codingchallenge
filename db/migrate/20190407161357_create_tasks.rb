# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string    :description
      t.boolean   :completed,    default: false
      t.datetime  :completed_at
      t.timestamps
    end
  end
end
