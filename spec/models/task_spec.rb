require 'rails_helper'

describe Task, type: :model do
  let!(:task) { FactoryBot.create(:task) }
  let!(:completed_task) { FactoryBot.create(:task, completed: true, completed_at: Time.now) }

  describe "#complete!" do
    it "does not update a completed task" do
      current_time = completed_task.completed_at
      completed_task.complete!

      expect(completed_task.completed_at).to eq current_time
    end

    it "updates an incompleted task" do
      task.complete!
      expect(task.completed).to be_true
      expect(task.completed_at).to be_present
    end
  end
end
