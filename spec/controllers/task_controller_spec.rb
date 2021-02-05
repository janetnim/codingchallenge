require 'rails_helper'

describe Api::V1::TasksController, :type => :controller do
  describe "#index" do
    let!(:task) { FactoryBot.create(:task) }

    it "shows a list of all tasks" do
      get :index

      expect(json_response.count).to eq 1
      expect(json_response[0]).to eq ({
        "id" => task.id,
        "description" => task.description,
        "completed" => task.completed,
        "completed_at" => task.completed_at,
        "avatar" => nil
      })
    end

    it "creates a new task" do
      get :create, params: { description: "this is another task" }

      expect(Task.count).to eq 2
      expect(json_response["description"]).to eq "this is another task"
    end

    it "updates a task" do
      put :update, params: { id: task.id }

      task.reload

      expect(task.completed).to be true
      expect(task.completed_at).to be_present
    end
  end
end
