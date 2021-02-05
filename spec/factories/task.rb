FactoryBot.define do
  factory :task, class: "Task" do
    description { "First task" }
    completed { false }
    completed_at { }
  end
end
