// components/Hello.tsx
import React from "react";

export default class Film extends React.Component<{}, { id: string; title: string; releaseYear: number }> {
  id: string;
  title: string;
  releaseYear: number;
}
