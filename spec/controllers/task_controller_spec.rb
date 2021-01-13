require 'rails_helper'

describe Api::V1::TasksController, :type => :controller do
  describe "#index" do
    let!(:task) { FactoryBot.create_list(:task) }

    it "#index" do
      get :index

      expect(json_response.count).to eq 1
      expect(json_response[0]).to eq ({
        id: task.id,
        description: task.description,
        completed: task.completed,
        completed_at: task.completed_at,
        avatar: task.avatar
      })
    end

    it "create" do
      get :create, params: { description: "this is another task" }

      expect(json_response.count).to eq 2
    end

    it "update" do
      get :update, params: { id: task.id }

      expect(task.completed).to be_true
      expect(task.completed_at).to be_present
    end
  end
end
