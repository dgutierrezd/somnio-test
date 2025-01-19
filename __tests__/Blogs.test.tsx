import React from "react";
import { render } from "@testing-library/react-native";
import { useSelector, useDispatch } from "react-redux";
import Blogs from "../components/Blogs";
import { Post } from "@/redux/interfaces";

const mockPosts: Post[] = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post",
    userId: 0,
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post",
    userId: 0,
  },
];

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Blogs Component", () => {
  beforeEach(() => {
    (useSelector as unknown as jest.Mock).mockImplementation((selectorFn) =>
      selectorFn({ posts: { posts: mockPosts } })
    );
    (useDispatch as unknown as jest.Mock).mockReturnValue(jest.fn());
  });

  it("renders blog items correctly", () => {
    const { getByText } = render(<Blogs />);

    expect(getByText("First Post")).toBeTruthy();
    expect(getByText("Second Post")).toBeTruthy();

    expect(getByText("This is the first post")).toBeTruthy();
    expect(getByText("This is the second post")).toBeTruthy();
  });
});
