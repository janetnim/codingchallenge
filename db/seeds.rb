# frozen_string_literal: true

9.times do |i|
  Task.create(
    description: "Do this and that",
    completed: false,
    completed_at: nil
  )
end
