//Java Solution

class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if (root == null) {
            return null;
        }
        
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        
        if (root.val < low) {
            return trimBST(root.right, low, high);
        }
        
        if (root.val > high) {
            return trimBST(root.left, low, high);
        }
        
        return root;
    }
}